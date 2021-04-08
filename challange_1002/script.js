var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

/* var raio = parseFloat(lines.shift());

const pi = 3.14159;

var area = pi * Math.pow(raio, 2);

console.log("A="+ area.toFixed(4)); */

const raio = parseFloat(lines.shift());

const pi = 3.14159;

const area = pi * Math.pow(raio, 2);

console.log("A="+ area.toFixed(4));