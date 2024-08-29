function matriculaAutoescola(nome, dataNascimento) {
  const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regexData.test(dataNascimento)) {
    return "Erro: A data de nascimento deve estar no formato DD/MM/AAAA.";
  }

  const partesData = dataNascimento.split("/");
  const dia = parseInt(partesData[0], 10);
  const mes = parseInt(partesData[1], 10) - 1;
  const ano = parseInt(partesData[2], 10);
  const dataNascimentoObj = new Date(ano, mes, dia);
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimentoObj.getFullYear();
  const mesCorrente = hoje.getMonth();
  const diaCorrente = hoje.getDate();

  if (mesCorrente < mes || (mesCorrente === mes && diaCorrente < dia)) {
    idade--;
  }

  const precoNormal = 1800;
  let mensagem;

  if (idade < 16) {
    mensagem = `Olá ${nome}, você não pode fazer a matrícula antecipada pois ainda não completou 16 anos.`;
  } else if (idade >= 16 && idade < 18) {
    const dataInicioAulas = new Date(ano + 18, mes, dia);
    const precoComDesconto = precoNormal * 0.8;
    mensagem = `Olá ${nome}, você está apto para a matrícula antecipada com um desconto de 20%. O valor a ser pago é R$${precoComDesconto.toFixed(
      2
    )}. Você poderá iniciar suas aulas no dia ${dataInicioAulas.toLocaleDateString(
      "pt-BR"
    )}.`;
  } else if (idade >= 18 && idade <= 40) {
    mensagem = `Olá ${nome}, você está apto para a matrícula e poderá iniciar suas aulas imediatamente. O valor a ser pago é R$${precoNormal.toFixed(
      2
    )}.`;
  } else if (idade > 40) {
    const precoComDesconto = precoNormal * 0.6;
    mensagem = `Olá ${nome}, você está apto para a matrícula com um desconto de 40%. O valor a ser pago é R$${precoComDesconto.toFixed(
      2
    )}. Você pode iniciar suas aulas imediatamente.`;
  }

  return mensagem;
}

console.log(matriculaAutoescola("Maria", "15/08/2005"));
console.log(matriculaAutoescola("João", "15/08/1980"));
console.log(matriculaAutoescola("Ana", "15/08/1960"));
