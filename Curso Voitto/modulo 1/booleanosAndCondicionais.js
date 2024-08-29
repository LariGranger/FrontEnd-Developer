//*vericador de aprovação
const notaDoJoao = 5;

if (notaDoJoao >= 6) {
  console.log("Parabéns, você foi aprovado!");
} else if (notaDoJoao >= 4 && notaDoJoao < 6) {
  console.log("Você está de recuperação!");
} else {
  console.log("Que pena, estude mais da próxima vez!");
}

//*se a meta for batida, aumentamos o salário
const metaDeVendas = 5000;
const vendasDaJuliana = 7000;

let salarioDaJuliana = 3000;

if (vendasDaJuliana >= metaDeVendas) {
  salarioDaJuliana = salarioDaJuliana * 1.2;
}
console.log("O salário da Juliana é R$" + salarioDaJuliana);
console.log(typeof (vendasDaJuliana >= metaDeVendas));

//*saudação para uma pessoa
nome = "";
if (nome) {
  console.log("Fala aê " + nome);
  //string foi interpreta como boolean pelo IF
  console.log;
} else {
  console.log("Fala aê, gente fina");
}
//! Truthy e Falsy: é um tipo de dado que quando levado a um contexto booleano, é entendido como verdadeiro ou falso
//?Falsy: false, 0, strings vazias, null, undefined, NaN
//?Truthy: todo o resto

console.log(!!0);
console.log(!!123);
console.log(!!"0");
