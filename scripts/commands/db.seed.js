const { AppDataSource } = require("../../src/data-source");
const bcrypt = require("bcrypt");

module.exports = async () => {
  try {
    await AppDataSource.initialize();

    const userRepo = AppDataSource.getRepository("User");

    const password = await bcrypt.hash("123456", 10);

    await userRepo.save({
      email: "admin@mail.com",
      password,
      role: "ADMIN"
    });

    console.log("🌱 Seed done");

    process.exit();
  } catch (e) {
    console.error("❌ Error:", e.message);
  }
};