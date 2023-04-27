import validator from './validator.js';

const card = document.getElementById("numero-do-cartao");//pega o valor digitado no input
const button = document.getElementById("validar");//pega o botão


button.addEventListener("click", validarnumerocartao);//adiciona um evento de click nesse caso, e parametriza com uma função a seguir

function validarnumerocartao(evento) {//chamar a função a ser executada
  evento.preventDefault();//antes, nomeei esse evento da função para colocar o preventDefault que serve para o formulario não ser enviado antes da verificação da função ocorrer
  const numerocartao = card.value // pega o valor digitado em valor
  const validador = validator.isValid(numerocartao)

  if (numerocartao.length < 16) {
    alert ("Cartão Incompleto");
  }
  else if (validador === true) {
    alert (` Cartão Válido: ${validator.maskify(numerocartao)}`)
  }
  else if (!validador) {
    alert ("Cartão Inválido");
  }
}
