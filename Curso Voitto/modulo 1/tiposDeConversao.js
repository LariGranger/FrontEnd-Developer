//?typecasting: conversão de dados

//* conversão implicita
//o JS concatena o number com a string, por isso o resultado é 89
const num1 = 8;
const num2 = "9";

const soma = num1 + num2;
console.log(soma);
//typeof: retorna o tipo da variável
console.log(typeof soma);

//* conversão explicita
const num3 = 8;
const num4 = "9";
//de String para Number
let sum = num3 + Number(num4);

console.log(sum);
console.log(typeof sum);

//de Number para String
console.log(typeof String(num1));

//! o JS converte textos em números, mas o resultado é um NaN
