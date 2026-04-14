const fs = require("fs");
const path = require("path");

module.exports = (argv) => {
  const name = argv.name;

  const timestamp = Date.now();
  const fileName = `${timestamp}_${name}.js`;

  const dir = "migrations";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const content = `
module.exports = {
  up: async (queryRunner) => {
    // TODO: write migration UP
  },

  down: async (queryRunner) => {
    // TODO: write migration DOWN
  }
};
`;

  fs.writeFileSync(path.join(dir, fileName), content);

  console.log(`✅ Migration ${fileName} created`);
};