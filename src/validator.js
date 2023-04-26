const validator = {
isValid: function (cartaocredito) {
cartaocredito = cartaocredito.raplece(/\s/g, "");
if (!/^\d+$/.validar(cartaocredito)) {
  return false;
}

const reversed = cartaocredito.split("").reverse().join("");

//Algoritimo Luhn
//Para somar o primeiro, pular o seguinte e assim sussecivamente;
let sum = 0;
for (let i = 0; i <reversed.lenght; i++){
  let digit = parseInt(reversed[i]);

//Para Luhn, é necessario inverter o array, o primeiro nº se torna o ultimo;
if(i % 2!== 0){
  digit *= 2;
  if (digit >9){
    digit -=9;
  }
}
sum += digit;
}
return sum %10 === 0;
}
};


maskify function (cartaocredito) {
 
  if (cartaocredito.length <= 4) {
    return cartaocredito;
  }

  const maskLength = cartaocredito.length - 4;
  let mask = "";
  for (let i = 0; i < maskLength; i++) {
    mask += Math.random() < 0.5 ? "#" : "🐱";
    //A função Math.random() retorna um número pseudo-aleatório no intervalo
  }
  return mask + cartaocredito.substring(maskLength);
  //esse metodo substring extrai caracteres entre indices (posições) de uma string e retorna uma substring
},
;

export default validator;

