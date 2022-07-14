const Postgre = require('pg').Pool;
require('dotenv').config();

const connection = new Postgre({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432
});

connection.connect((error) => {
  if (error) throw error;
  console.info("You're connected to the database!");
});

module.exports = connection;
