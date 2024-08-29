//paramentro único não precisa de parenteses, nem de return ou chaves (para uma linnha só)
const aplicarDesconto = (precoOriginal) =>
  (precoComDesconto =
    precoOriginal > 50 ? precoOriginal * 0.5 : precoOriginal * 0.7);
let sapato = 70;
let blusa = 29;
let calca = 59;

sapato = aplicarDesconto(sapato);
blusa = aplicarDesconto(blusa);
calca = aplicarDesconto(calca);

console.log(sapato);
console.log(blusa);
console.log(calca);

const darUmTchauzinho = () => console.log("Falow, galera");
console.log(darUmTchauzinho()); //undefined
