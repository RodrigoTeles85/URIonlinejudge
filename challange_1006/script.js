var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var valorA = parseFloat(lines.shift());
var valorB = parseFloat(lines.shift());
var valorC = parseFloat(lines.shift());

var mediaAluno = (valorA*2 + valorB*3 + valorC*5)/10;

console.log("MEDIA = "+ mediaAluno.toFixed(1));
