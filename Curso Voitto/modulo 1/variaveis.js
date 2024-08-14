//*Variaveis nos permitem armazenar dados
//JS é case sensitive

//declarando uma varíavel:
let resultado = 2 + 2;
console.log(resultado);

//tirar a média das notas dos alunos de uma sala
let notaDoJoao = 7;
let notaDoCarlos = 8;
let notaDaAna = 9;

let mediaDasNotas = (notaDoJoao + notaDoCarlos + notaDaAna) / 3;

let notaDaMariana = 10;
let notaDaAna1 = 7;

mediaDasNotas =
  (notaDoJoao + notaDoCarlos + notaDaMariana + notaDaAna + notaDaAna1) / 5;
console.log("Media das notas: ", mediaDasNotas);

//! O var é problemático e propenso a bugs. Criou-se o LET e CONST para resolver seus problemas
//quando uso o LET, o próprio VSCode já avisa do nome duplicado das variáveis

//pode alterar o valor
let a = 2;
a = 3;

//não altera o valor
const b = 4;
