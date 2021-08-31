const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const resultNine = () => {
  const actual = sum(4, 5);
  assert.strictEqual(actual, 9, 'expecting 9 as result!')
};

resultNine();