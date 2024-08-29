//*Funcões são dados estruturais. Beneficios: agrupamento de código, reuso, identifica a funcionalidade do agrupamento

function nomeDaFuncao() {
  //trechoDeCodigoASerExecutado
}

//! Não posso utilizar a variável antes de ela ser criada, isso dá erro
//console.log(saudacao);
//const saudacao = "Olá, mundo";

//*Na função, existe o Roisting (elevação), onde não tem problema chamarmos a função antes de sua declaração.

//?Argumentos e parâmetros

function darUmAlo(nome = "rapazeada") {
  //nome é parametro, só existe dentro do contexto da função. "rapazeada" é definido como um paramêtro "backup", caso não seja passado nenhum ao chamar a função
  console.log(`"E aê, ${nome}"`);
}

function darUmTchauzinho(nome, periodo) {
  console.log(`"Falow, ${nome}", boa ${periodo}`);
}

darUmAlo("José"); //José é argumento
darUmAlo();
darUmTchauzinho("José", "noite");
