const db = require("../../db");

class UserService {
  async getAllUsers() {
    const query = "SELECT * FROM users WHERE deleted_at IS NULL ORDER BY id";
    const result = await db.query(query);

    const totalCount = result.rowCount;
    const users = result.rows;

    return { totalCount, users };
  }

  async getUserByUsername(searchQuery) {
    const query =
      "SELECT * FROM users WHERE username LIKE $1 AND deleted_at IS NULL ORDER BY id";

    const values = [`%${searchQuery}%`];
    const result = await db.query(query, values);

    return result.rows;
  }

  async addUser(userData) {
    const { username, name, surname, email, password, phone_number, address } =
      userData;

    const query =
      "INSERT INTO users (username, name, surname, email, password, phone_number, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      username,
      name,
      surname,
      email,
      password,
      phone_number,
      address,
    ];

    const result = await db.query(query, values);

    return result.rows[0];
  }

  async softDeleteUser(id) {
    const query =
      "UPDATE users SET deleted_at = NOW() WHERE id = $1 RETURNING *";

    const values = [id];
    const result = await db.query(query, values);

    return result.rows[0];
  }

  async deleteUser(id) {
    const query = "DELETE FROM users WHERE id = $1 RETURNING * ";

    const values = [id];
    const result = await db.query(query, values);

    return result.rows[0];
  }

  async updateUser(id, userData) {
    const { username, name, surname, email, password, phone_number, address } =
      userData;
    const query = `
      UPDATE users 
      SET username = '${username}', name = '${name}', surname = '${surname}', email = '${email}', password = '${password}', phone_number = '${phone_number}', address = '${address}' 
      WHERE id = ${id} 
      RETURNING *
    `;

    const result = await db.query(query);
    return result.rows[0];
  }
}

module.exports = new UserService();
