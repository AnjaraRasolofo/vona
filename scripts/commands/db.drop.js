const mysql = require("mysql2/promise");
const readline = require("readline");
require("dotenv").config();

module.exports = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    });

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("⚠️ Confirm DROP DATABASE? (yes/no): ", async (answer) => {
      if (answer !== "yes" && answer !== "y") {
        console.log("❌ Cancelled");
        rl.close();
        return;
      }

      await connection.query(
        `DROP DATABASE IF EXISTS \`${process.env.DB_NAME}\``
      );

      console.log(`🗑️ Database "${process.env.DB_NAME}" dropped`);

      await connection.end();
      rl.close();
    });

  } catch (error) {
    console.error("❌ Error:", error.message);
  }
};