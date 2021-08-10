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
filhoOndeVoceEsta.innerText = "I'm back with guns!"