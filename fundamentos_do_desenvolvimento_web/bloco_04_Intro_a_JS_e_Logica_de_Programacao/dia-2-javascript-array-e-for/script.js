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
let higherNumber = 0;
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
};

let lowerNumber = numbers[0]
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowerNumber) {
        lowerNumber = numbers[index]
    };
}; console.log (lowerNumber); 

let numbers = [];
for (let i = 1; i <= 25; i += 1){
    numbers.push(i)
} 
for (let j = 0; j < numbers.length; j += 1) {
    numbers[j] = numbers[j] / 2;
};
console.log (numbers);*/

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            let change = numbers[i]; //crio a variável para receber o valor de numbers[i]
            numbers[i] = numbers[j]; //atribuo o valor de numbers[i](posição posterior) a numbers[j] (posição anterior)
            numbers[j] = change; // recebo o valor da posição numbers[i] pois ela havia sido guardada anteriormente pela variavel criada.
        }
    }

} console.log (numbers);



