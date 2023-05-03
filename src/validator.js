

const validator = {//iniciando a variavel do validador
  isValid(cartaocredito) {
    function digitoscartao(numeros) {//a função sera referente aos numeros do cartao
      if (numeros < 9) {//os numeros precisam ser verificados por posição
        return numeros;//if= se // nº<9 retorna eles mesmos
      }
      else {
        return numeros % 10 + 1;//else= caso não // os numeros deverão ser divididos por 10 e somados 1
      }// (%) significa o resto da divisão por 10 e o resto é somado 1, pois dessa maneira sempre retornará um numero entre 0 e 9
    }
    let somaPar = 0;//definir as variaveis como 0, para ser usadas como acumular a soma do primeiro digito
    let somaImpar = 0;
    let aux = 0;
    //for é um loop(laço de repetição) onde é necessario verificar todos os numeros do cartão.
    //O alg Luhn lê os nº da direita para a esquerda.
    for (let p = cartaocredito.length - 2; p >= 0; p = p - 2) {//for(inicialização; condição; expressão final)
      aux = parseInt(cartaocredito.charAt(p) + "");//abriu chaves p/ executar o bloco, onde o aux= parsInt converte a strg em numero inteiro(do parametro cartaocredito.charAt(p)"onde charAt extrai o nº dessa str que você deseja extrair no caso p")
      somaPar = somaPar + digitoscartao(aux * 2);//em loop até que todos os numeros sejam multplicados pelo o aux*2
    }

    for (let i = cartaocredito.length - 1; i >= 0; i = i - 2) {// idem ao loop de cima, porem agora extraindo os nº da strg -1 que pegará as posições pares.
      aux = parseInt(cartaocredito.charAt(i) + "");
      somaImpar = somaImpar + aux;
    }

    if ((somaPar + somaImpar) % 10 === 0) {//condição se os loops acima forem multiplos de 10 = verdadeiro ou não
      return true;
    }
    else {
      return false;
    }
  },


  maskify(cartaocredito) {

    const quatrodig = cartaocredito.slice(-4)
    const qtdMask = cartaocredito.lenth - 4
    const mask = "#".repeat(qtdMask) + "############ " + quatrodig 
    return mask
  }
}







export default validator;

