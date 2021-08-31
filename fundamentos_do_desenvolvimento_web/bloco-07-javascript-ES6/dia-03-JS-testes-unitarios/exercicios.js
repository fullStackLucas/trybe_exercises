const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// testando se o resultado da soma entre 5 e 4 é igual a 9

const resultNine = () => {
  const actual = sum(4, 5);
  assert.strictEqual(actual, 9, 'expecting 9 as result!')
};


// testando se o resultado da soma entre 5 e 4 é igual a 9

const resultZero = () => {
  const actual = sum(0, 0);
  assert.strictEqual(actual, 0, 'expecting 0 as result!')
};

sum(4, '5');
