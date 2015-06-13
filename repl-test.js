#!/usr/bin/env node
var repl = require('repl');

var con = repl.start('sushil> ');

function greet(name) {
  console.log('Hi %s!!!', name);
}

con.context.greet = greet;
