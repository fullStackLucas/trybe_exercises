const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz(30), 'fizzbuzz');

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz(6), 'fizz');

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

assert.strictEqual(myFizzBuzz(20), 'buzz');

// 