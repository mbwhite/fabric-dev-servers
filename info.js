
'use strict'
var chalk = require('chalk');
var shell = require('shelljs');

console.log(chalk.blue.bold('\nCurrent explicitly set Fabric version for Composer getting-started  [default is hlfv1, alternative is hlfv0.6] '));
console.log(chalk.blue('$ npm get getting-started:fabricversion '));
shell.exec('npm get getting-started:fabricversion');

console.log(chalk.blue.bold('\nCurrent explitcly set Fabric version for Fabric fabric-dev-servers  [default is hlfv1, alternative is hlfv0.6] '));
console.log(chalk.blue('$ npm get fabric-dev-servers:fabricversion '))
shell.exec('npm get fabric-dev-servers:fabricversion');

console.log(chalk.blue.bold('\nCurrently running Docker containers:'));
console.log(chalk.blue('$ docker ps'));
shell.exec('docker ps');
