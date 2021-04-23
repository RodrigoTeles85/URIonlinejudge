var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const valorA = parseInt(lines.shift());
const valorB = parseInt(lines.shift());
const valorC = parseInt(lines.shift());
const valorD = parseInt(lines.shift());

let diferenca = valorA * valorB - valorC * valorD;

console.log("DIFERENCA = "+ diferenca);