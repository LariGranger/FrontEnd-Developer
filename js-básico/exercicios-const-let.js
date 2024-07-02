/* Exercício 1 - Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e sem IMC é 25.92...
Luiz Otávio nasceu em 1984*/

const nome = "Larissa";
const sobrenome = "Pinheiro";
const idade = 23;
const peso = 49;
const altura = 1.59;

let imc; //peso / (altura * altura)
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2024 - idade;

console.log(
  nome,
  sobrenome,
  "tem",
  idade,
  "anos, pesa",
  peso,
  "kg, tem",
  altura,
  "de altura e seu IMC é",
  imc,
  "."
);
console.log(nome, sobrenome, "nascem em", anoNascimento);
