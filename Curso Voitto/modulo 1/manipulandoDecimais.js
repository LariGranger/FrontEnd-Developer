const precoAtual = 49.9;
const desconto = 0.05;

const novoPreco = precoAtual * (1 - desconto);

console.log(
  `DEU A LOUCA NO GERENTE! Compre por apenas R$${novoPreco
    .toFixed(3)
    .replace(".", ",")}`
);
