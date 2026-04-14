const mysql = require("mysql2/promise");
require("dotenv").config();

module.exports = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``
    );

    console.log("✅ Database created");

    await connection.end();
  } catch (e) {
    console.error("❌ Error:", e.message);
  }
};