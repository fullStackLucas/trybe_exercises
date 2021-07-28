let anguloA = 60;
let anguloB = 0;
let anguloC = 60;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log ("ângulo inválido");
} else if (anguloA + anguloB + anguloC !== 180) {
    console.log ("false");
} else if (anguloA + anguloB + anguloC === 180) {
    console.log ("true");
};
