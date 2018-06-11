#!/usr/bin/env node
 
let chalk = require('chalk')
let chuckData = require('../data/chuck.json')

let msg = `${chalk.green('Chuck says: ')}${chalk.yellow(chuckData.value.joke)}`
console.log(msg)
