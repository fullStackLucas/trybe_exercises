const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // Dada uma matriz, transforme em um array.
  return arrays.reduce((array, currentValue) => array.concat(currentValue))
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);