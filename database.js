const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "prabhattodo",
  password: "Prabhat@9407",
  port: 5432,
});

pool.query(
  `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`,
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Table created successfully");
    }
  }
);

module.exports = pool;
