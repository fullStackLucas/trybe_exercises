let ondeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
let pai = ondeVoceEsta.parentNode;
pai.style.color = "green";
let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerHTML = "Adicione um texto aqui";
let firstChild = pai.firstChild;
firstChild = ondeVoceEsta.previousElementSibling;
let atencao = ondeVoceEsta.nextSibling;
atencao.innerText = "Atenção dupla!"
let thirdChild = ondeVoceEsta.nextElementSibling;
thirdChild = pai.lastChild.previousElementSibling;

let irmaoOnde = document.createElement("section");
pai = document.querySelector("#pai");
pai.appendChild(irmaoOnde);
irmaoOnde.innerText = "Hello World!"

let filhoOndeVoceEsta = document.createElement("article");
ondeVoceEsta.appendChild(filhoOndeVoceEsta);
filhoOndeVoceEsta.innerText = "I'm back with guns!";

let bisneto = document.createElement("p");
primeiroFilhoDoFilho.appendChild(bisneto);
bisneto.innerText = "Olá, sou o bisneto";

let acessThirdChild = bisneto.parentNode.nextElementSibling;

let remove = pai.children;
console.log(remove.length);
for (let index = 2; index < remove.length; index += 1){
    let element = remove[index];
    if (element.length !== 0 ){
        element.remove();
        index -=1;
    } else {
        break;
    }
};
