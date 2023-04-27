const validator = {

  isValid(cartaocredito) {
    function somaDigitos(numero) {
      if (numero < 9) {
        return numero;
      }
      else {
        return numero % 10 + 1;
      }
    }
    let somaPar = 0;
    let somaImpar = 0;
    let aux = 0;

    for (let p = cartaocredito.length - 2; p >= 0; p = p - 2) {
      aux = parseInt(cartaocredito.charAt(p) + "");
      somaPar = somaPar + somaDigitos(aux * 2);
    }

    for (let i = cartaocredito.length - 1; i >= 0; i = i - 2) {
      aux = parseInt(cartaocredito.charAt(i) + "");
      somaImpar = somaImpar + aux;
    }

    if ((somaPar + somaImpar) % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  },


  maskify(cartaocredito) {

    const quatrodig = cartaocredito.slice(-4)
    const qtdMask = cartaocredito.lenth - 4
    const mask = "#".repeat(qtdMask) + "#### #### #### " + quatrodig 
    return mask
  }
}







export default validator;

