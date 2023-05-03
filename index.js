import validator from './validator.js';

const card = document.getElementById("numero-do-cartao");//pega o valor digitado no input
const button = document.getElementById("validar");//pega o botão

function zerarInput(){
  document.getElementById("numero-do-cartao").value = "";
}

button.addEventListener("click", function(evento){//adiciona um evento de click nesse caso, e parametriza com uma função a seguir
  
  evento.preventDefault();//antes, nomeei esse evento da função para colocar o preventDefault que serve para o formulario não ser enviado antes da verificação da função ocorrer
  const numerocartao = card.value; // pega o valor digitado na variavel do input
  const validador = validator.isValid(numerocartao);//essa varivel é onde irei chamar o verificar de Luhn e mask na pasta validator.js

  if (numerocartao.length < 16) {// condição = length é o comprimento da strg tem que menor que 16 caracteres
    alert ("Cartão Incompleto");
  }
  else if (validador === true) {//se o validador = validator.isValid for vddeiro, imprimo uma msg + o numero mascarado
    zerarInput();
    alert ("Cartão Válido: " + validator.maskify(numerocartao));
    
  }
  else if (validador === false) {//se o validador = validator.isValid for falso, imprime a msg como alerta
    alert ("Cartão Inválido");
  }
}
);