//* Operador condicional ternário: forma mais fácil de fazer um if/else

//teste para saber se pode tirar a CNH
const idade = 16;
const pais = "EUA";

const resultado = idade >= 18 ? "Aprovado" : "Reprovado";
console.log(resultado);

// let resultado;
// if(idade >= 18 ){
//   resultado = "Aprovado"
// }else if(idade >= 16 && pais === "EUA"){
//   resultado = "Aprovado"
// }else{
//   resultado = "Reprovado"
// }
const result =
  idade >= 18
    ? "Aprovado"
    : pais === "EUA" && idade >= 16
    ? "Aprovado"
    : "Reprovado";
console.log(result);
