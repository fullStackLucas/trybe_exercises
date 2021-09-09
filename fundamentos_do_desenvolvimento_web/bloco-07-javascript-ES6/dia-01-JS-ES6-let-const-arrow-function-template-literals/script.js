//exercicio 1

const testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
  ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
  const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  (escopo === true) ? console.log(ifScope) : console.log(elseScope)
  }


/* testingScope(true); */

// exercicio fixação 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordemCrescente = (arrayDeNumeros) => {
  let numerosOrdenados = [];
  for (let index = 0; index < oddsAndEvens.length; index += 1){
    if(arrayDeNumeros[index] > arrayDeNumeros[index + 1]) {
      let trocar = arrayDeNumeros[index];
      arrayDeNumeros[index] = arrayDeNumeros[index + 1];
      arrayDeNumeros[index + 1] = trocar;
      numerosOrdenados.push()
    }
  }
  return arrayDeNumeros;
};


///console.log(oddsAndEvens); // será necessário alterar essa linha 😉
ordemCrescente(oddsAndEvens);