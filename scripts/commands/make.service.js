const fs = require("fs");

module.exports = (argv) => {
  const name = argv.name;

  const content = `
class ${name}Service {
  static async example() {
    return "Hello from ${name}";
  }
}

module.exports = { ${name}Service };
`;

  fs.writeFileSync(`src/services/${name}.service.js`, content);

  console.log(`✅ Service ${name} created`);
};