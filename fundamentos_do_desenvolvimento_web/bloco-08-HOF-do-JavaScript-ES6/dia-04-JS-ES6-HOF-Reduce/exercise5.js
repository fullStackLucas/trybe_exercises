const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const howManyTimes = function (string, letter) {
  let count = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index].toLowerCase() === letter) {
      count += 1;
    }
  }
  return count;
}
  

function containsA() {
  // Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
  const reducer = names.reduce((acc, elemento) => {
    acc += howManyTimes(elemento, 'a')
    return acc;
  }, 0)
  return reducer;
}

assert.deepStrictEqual(containsA(), 20);