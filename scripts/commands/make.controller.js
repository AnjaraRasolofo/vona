const fs = require("fs");

module.exports = (argv) => {
  const name = process.argv[3];
  if (!name) {
    console.log("❌ Missing entity name");
    return;
  }

  const content = `
const ${name}Service = require("../services/${name}.service");

const getAll = async (req, res) => {
  res.json([]);
};

module.exports = { getAll };
`;

  fs.writeFileSync(`src/controllers/${name}.controller.js`, content);

  console.log(`✅ Controller ${name} created`);
};