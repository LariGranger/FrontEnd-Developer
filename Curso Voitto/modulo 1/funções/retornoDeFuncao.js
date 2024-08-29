//round - arredondamento
//random - aleatorio
function gerarSenha() {
  const senha = Math.round(Math.random() * (999999 - 100000) + 100000);
  //usando return consigo usar isto fora do escopo. E ele encerra a leitura da função
  return senha;
  console.log("Eu não vou aparecer");
}

const senha = gerarSenha();
console.log(senha);
