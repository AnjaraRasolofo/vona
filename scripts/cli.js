#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv))
  .command(
    "db:create",
    "Create database",
    () => {},
    require("./commands/db.create")
  )
  .command(
    "db:reset",
    "Reset database",
    () => {},
    require("./commands/db.reset")
  )
  .command(
    "db:seed",
    "Seed database",
    () => {},
    require("./commands/db.seed")
  )
  .command(
    "db:drop",
    "Drop database",
    () => {},
    require("./commands/db.drop")
  )
  .command(
    "make:controller <name>",
    "Create controller",
    require("./commands/make.controller")
  )
  .command(
    "make:service <name>",
    "Create service",
    (argv) => require("./commands/make.service")( {name: argv.name})
  )
  .command(
    "make:entity <name>",
    "Create entity",
    (argv) => require("./commands/make.entity")( {name: argv.name})
  )
  .command(
    "make:migration <name>",
    "Create migration",
    require("./commands/make.migration")
  )
  .demandCommand()
  .help()
  .argv;