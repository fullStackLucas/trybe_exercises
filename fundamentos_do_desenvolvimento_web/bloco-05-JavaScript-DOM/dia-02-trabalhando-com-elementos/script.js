let ondeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
let pai = ondeVoceEsta.parentNode;
pai.style.color = "green";
let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerHTML = "Adicione um texto aqui";
let firstChild = pai.firstChild;
firstChild = ondeVoceEsta.nextElementSibling;
