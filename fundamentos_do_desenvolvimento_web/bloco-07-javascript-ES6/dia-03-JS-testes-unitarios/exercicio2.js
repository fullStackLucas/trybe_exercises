const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Verifique se o array passado por parâmetro não sofreu alterações

const newArray = [3, 4, 5, 6, 7];
myRemove(newArray, 3)
assert.deepStrictEqual(newArray, [3, 4, 5, 6, 7]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);