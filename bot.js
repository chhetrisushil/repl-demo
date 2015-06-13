#!/usr/bin/env node
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var user = '';

rl.on('line', function (line) {
  if (line.trim() === 'exit') {
    return rl.emit('close');
  }

  console.log('Sushil: ypo');

  rl.setPrompt(user+': ');
  rl.prompt();
});

rl.on('close', function () {
  console.log('Sushil: Bye');

  process.exit(0);
});

console.log('Welcome');
rl.question('What\'s your name?', function (answer) {
  if (answer) {
    console.log('Hi %s', answer);
    user = answer;
  } else {
    user = 'Test';
  }

  rl.setPrompt(user+': ');
  rl.prompt();
});
