#!/usr/bin/evn node
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', function (line) {
  if (line.trim() === 'exit') {
    return rl.emit('close');
  }

  console.log('Sushil: ypo');

  rl.setPrompt('Test: ', 'Something');
  rl.prompt();
});

rl.on('close', function () {
  console.log('Sushil: Bye');

  process.exit(0);
});

console.log('Welcome');
rl.setPrompt('Test: ', 'GO');
