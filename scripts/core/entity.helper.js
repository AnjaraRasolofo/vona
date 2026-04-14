function toTableName(name) {
  return (
    name
      .replace(/([a-z])([A-Z])/g, "$1_$2") // camelCase → snake_case
      .toLowerCase() + "s" // plural simple
  );
}

function toEntityName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = {
  toTableName,
  toEntityName
};