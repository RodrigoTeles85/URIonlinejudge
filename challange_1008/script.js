var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const numFuncionario = parseInt(lines.shift());
let horasTrabalhada = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());

let salario = horasTrabalhada * valorHora;
let valorSalario = parseFloat(salario);

console.log("NUMBER = "+ numFuncionario);
console.log("SALARY = U$ "+ valorSalario.toFixed(2));