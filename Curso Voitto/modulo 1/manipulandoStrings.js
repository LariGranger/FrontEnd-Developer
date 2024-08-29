let nome = "Larissa Pinheiro";
const idade = 23;
const cidade = "Brasilia";

//posso quebrar linha também
const apresentacao = `Olá! 
Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}. Me conte mais sobre você!`;
console.log(apresentacao);

//contar quantos caracteres tem na string - o espaço é contabilizado
console.log(`Meu nome é ${nome} e ele contém ${nome.length} letras.`);

//substituo o espaço por vazio
const quantidadeDeLetras = nome.replace(" ", "");
console.log(
  `Meu nome é ${nome} e ele contém ${quantidadeDeLetras.length} letras.`
);

//troca a primeria letra "A" por "E"
console.log(nome.replace("a", "E"));

//troca todas letra "A" por "E"
console.log(nome.replaceAll("a", "E"));

nome = "LaRIssa";
//transforma string em minusculo
console.log(nome.toLocaleLowerCase());
//transforma string em maisculo
console.log(nome.toUpperCase());
