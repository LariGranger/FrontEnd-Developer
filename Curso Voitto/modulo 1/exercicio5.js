//Crie  uma  função  onde  é  passado  por  parâmetro  a temperatura em Celsius e ela te retorne o valor em Fahrenheit

function converteTemperatura(Celsius) {
  const Fahrenheit = (Celsius * 9) / 5 + 32;
  return Fahrenheit;
}

console.log(converteTemperatura(25));
