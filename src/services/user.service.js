const { Op } = require("sequelize");
const User = require("../models/user.model");

class UserService {
  async getAllUsers() {
    /*"SELECT * FROM users WHERE deleted_at IS NULL ORDER BY id"; */
    const users = await User.findAll({
      where: { deleted_at: null },
      order: [["id", "ASC"]],
    });
    const totalCount = users.length;

    return { totalCount, users };
  }

  async getUserByUsername(searchQuery) {
    /*"SELECT * FROM users WHERE username LIKE $1 AND deleted_at IS NULL ORDER BY id"; */
    const users = await User.findAll({
      where: {
        username: {
          [Op.like]: `%${searchQuery}%`,
        },
        deleted_at: null,
      },
      order: [["id", "ASC"]],
    });

    return users;
  }

  async addUser(userData) {
    // const { username, name, surname, email, password, phone_number, address } =
    //   userData;

    // const query =
    //   "INSERT INTO users (username, name, surname, email, password, phone_number, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    // const values = [
    //   username,
    //   name,
    //   surname,
    //   email,
    //   password,
    //   phone_number,
    //   address,
    // ];

    // const result = await db.query(query, values);

    // return result.rows[0];
    const user = await User.create(userData);
    return user;
  }

  async softDeleteUser(id) {
    /* const query =
      "UPDATE users SET deleted_at = NOW() WHERE id = $1 RETURNING *";

    const values = [id];
    const result = await db.query(query, values);

    return result.rows[0]; */
    const user = await User.findByPk(id);

    if (user) {
      user.deleted_at = new Date();
      await user.save();
    }
    return user;
  }

  async deleteUser(id) {
    /* const query = "DELETE FROM users WHERE id = $1 RETURNING * ";

    const user = await User.findByPk(id);

    const values = [id];
    const result = await db.query(query, values);

    return result.rows[0]; */
    const user = await User.destroy({ where: { id }, returning: true });

    return user;
  }

  async updateUser(id, userData) {
    /* const { username, name, surname, email, password, phone_number, address } =
      userData;
    const query = `
      UPDATE users 
      SET username = '${username}', name = '${name}', surname = '${surname}', email = '${email}', password = '${password}', phone_number = '${phone_number}', address = '${address}' 
      WHERE id = ${id} 
      RETURNING *
    `;

    const result = await db.query(query);
    return result.rows[0];
  } */

    const [updated] = await User.update(userData, {
      where: { id },
      returning: true,
    });

    if (updated) {
      const updatedUser = await User.findByPk(id);
      return updatedUser;
    }
    throw new Error("User not found");
  }
}

module.exports = new UserService();
