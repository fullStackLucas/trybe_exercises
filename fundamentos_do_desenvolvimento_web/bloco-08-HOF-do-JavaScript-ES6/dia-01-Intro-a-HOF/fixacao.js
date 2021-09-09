const wakeUp = () => 'Acordando!!';
const takeACoffee = () => 'Bora tomar café!!';
const sleepTime = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:

const doingThings = (func) => console.log(func());

doingThings(sleepTime);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!