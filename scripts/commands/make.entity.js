const fs = require("fs");
const { toTableName, toEntityName } = require("../core/entity.helper");

module.exports = (argv) => {
  const name = process.argv[3];

  if (!name) {
    console.log("❌ Missing entity name");
    return;
  }

  const entityName = toEntityName(name);
  const tableName = toTableName(name);

  const content = `
  const { EntitySchema } = require("typeorm");

  module.exports = new EntitySchema({
    name: "${name}",
    tableName: "${tableName}",
    columns: {
      id: {
        primary: true,
        type: "int",
        generated: true
      },
      createdAt: {
        type: "timestamp",
        createDate: true
      }
    }
  });
  `;

    const dir = "src/entities";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(`${dir}/${name}.js`, content);

    console.log(`✅ Entity ${name} created (table: ${tableName})`);
};