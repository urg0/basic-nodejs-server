const { Pool } = require("pg");

const pool = new Pool({
  users: "ulasguler",
  password: "b5s5kt5s",
  host: "localhost",
  port: 5432, //default Postgres port,
  database: "practice_database",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
