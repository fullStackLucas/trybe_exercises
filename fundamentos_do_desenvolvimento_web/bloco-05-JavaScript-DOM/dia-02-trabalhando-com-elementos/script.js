let ondeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
let pai = ondeVoceEsta.parentNode;
pai.style.color = "green";
let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerHTML = "Adicione um texto aqui";
let firstChild = pai.firstChild;
firstChild = ondeVoceEsta.previousElementSibling;
let atencao = ondeVoceEsta.parentNode;
atencao.innerHTML = "Mudando Elemento Atenção";
let thirdChild = ondeVoceEsta.nextElementSibling;
thirdChild = pai.lastChild.previousElementSibling;

