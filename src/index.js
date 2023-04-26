import validator from './validator.js';

// criar cometário
/*criar comentario várias linhas
*/
//pegar o Elemento com o Id=validar que é meu botão e adicionar um evento ao clicar, para validar numero do cartão.
document.getElementById("validar").addEventListener("click", validarnumerocartao);

//o que acontecerá a partir do clique estará dentro da função abaixo:
function validarnumerocartao() {
    const numerocartao = document.getElementById("numero-do-cartao").value;
    if (validator.isValid(numerocartao)) {
        const ultimosdig = numerocartao.substring(numerocartao.lenght - 4);
        const masknumero = validator.maskify(numerocartao);
        alert ("OK, cartão válido");

    } else {
        alert ("Oh! cartão inválido");
    }

}

console.log(validator);