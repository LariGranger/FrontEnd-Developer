//* Operadores atitméticos
//incremento e decremento
let x = 3;
x++;
console.log(x);
x--;
console.log(x);

//Potenciação ** e Módulo % (resto da divisão)
const expressao = 3 ** 2 % 2;
console.log(expressao);

//*Operadores de comparação: comparam dois valores e retornam um booleano
const notaDoJoao = 7;
const notaDaMaria = "7";
//! Um =, significa atribuição, dois == significa comparação, três === compara valor e tipo de dado
console.log(notaDoJoao == notaDaMaria);
console.log(notaDoJoao === notaDaMaria);
console.log(notaDoJoao != notaDaMaria);
console.log(notaDoJoao > notaDaMaria);
console.log(notaDoJoao >= notaDaMaria);
console.log(notaDoJoao < notaDaMaria);
console.log(notaDoJoao <= notaDaMaria);

//* Operadores lógicos
//AND (E) &&: retorna true somente se todos os operadores forem verdadeiros
console.log(true && true);
//OR (OU) ||: retorna true quando um dos operadores forem verdadeiros
console.log(true || false);
//NOT (NÃO) !: inverte o valor do operador
console.log(!true);
