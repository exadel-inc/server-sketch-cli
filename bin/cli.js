#!/usr/bin/env node

const chalk = require('chalk');
const copy = require('recursive-copy');
require('yargs')
  .command('create-demo-project', chalk.magenta('Create sample project'), () => {
  }, createSampleProject);


async function createSampleProject() {
  const findup = require('findup');
  const fs = require('fs').promises;
  let root = findup.sync(process.cwd(), 'package.json');

  console.log(`${chalk.blue('Project root')}: ${chalk.yellow(root)}`);
  console.log(chalk.blue('Start creating project structure...'));
  await copy(`${__dirname}/../examples/demo-project/`, root, { overwrite: true });
  console.log(chalk.blue('Project structure was created!'));

  let packageJson = require(`${root}/package.json`);
  packageJson.scripts = packageJson.scripts || {};
  let command = 'npm run server';
  if (!packageJson.scripts.server) {
    packageJson.scripts.server = 'node server/start.js';
  } else {
    command = 'npm run server-sketch';
    packageJson.scripts['server-sketch'] = 'node server/start.js';
  }
  await fs.writeFile(`${root}/package.json`, JSON.stringify(packageJson, null, 2));

  console.log(chalk.yellow('package.json'), chalk.blue('was updated with start server command.'));
  console.log(chalk.green(`Please, use next commands to start server:\n`),
    chalk.red(`- ${command}\n`)
  );
}
