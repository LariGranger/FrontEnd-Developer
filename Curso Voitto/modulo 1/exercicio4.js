//“O SAC da Voitto prioriza pessoas com mais de 60 anos para o atendimento. Para isso ela verifica se você tem no mínimo 60 anos, caso isso seja verdade ela te encaminha para a fila preferencial. Caso não, ela pede para você aguarda o atendimento na fila.” Utilize o operador ternário para verificar essa condição.

const idade = 72;

const preferencia =
  idade >= 60
    ? "Vá para a fila preferencial"
    : "Aguarde o atendimento na fila normal";
console.log(preferencia);
