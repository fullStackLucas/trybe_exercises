let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*let sum = 0
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};
if ((sum / numbers.length) > 20) {
    console.log ("valor maior que 20")
} else {
    console.log ("valor menor ou igual a 20")
};
higherNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index]
    };
}; console.log (higherNumber)
let oddNumbers = 0
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddNumbers += 1
    }; 
};
if (oddNumbers > 0) {
    console.log (oddNumbers)
} else {
    console.log ("nenhum valor ímpar encontrado")
};*/

let lowerNumber = numbers[0]
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowerNumber) {
        lowerNumber = numbers[index]
    };
}; console.log (lowerNumber); 