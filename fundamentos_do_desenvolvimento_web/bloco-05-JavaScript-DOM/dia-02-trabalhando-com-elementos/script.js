//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "Hello, World!"

//2 Adicione a tag main com a classe main-content como filho da tag body ;
let main = document.createElement("main");
document.body.appendChild(main);
main.classList.add("main-content");
main = document.querySelector(".main-content");

//3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sectionCenter = document.createElement("section");
main.appendChild(sectionCenter);
sectionCenter.classList.add("center-content");
sectionCenter = document.querySelector(".center-content");

//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p1 = document.createElement("p");
sectionCenter.appendChild(p1);
p1.innerText = "Estou atrasado nos exercícios"

//5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionLeft = document.createElement("section");
main.appendChild(sectionLeft);
sectionLeft.classList.add("left-content");
sectionLeft = document.querySelector(".left-content");

//6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRight = document.createElement("section");
main.appendChild(sectionRight);
sectionRight.classList.add("right-content");
sectionRight = document.querySelector(".right-content");

//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let smallImage = document.createElement("img");
sectionLeft.appendChild(smallImage);
smallImage.src = "https://picsum.photos/200";

//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let numeros = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
let lista = document.createElement("ul");
sectionRight.appendChild(lista);
lista.classList.add("lista6");
lista = document.querySelector(".lista6");

for (let i = 0; i < numeros.length; i += 1){
  let item = numeros[i]; //coloco cada número por extenso dentro da variável;
  let listItem = document.createElement("li"); // crio uma li de cada vez, sempre que o for rodar.
  listItem.innerText = item; //atribuo o nome do número por extenso correspondente ao índice do for dentro da LI;
  lista.appendChild(listItem); // faço o vínculo da LI à UL (lista não ordenada);
};

//9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let primeiroH3 = document.createElement("h3");
let segundoH3 = document.createElement("h3");
let terceiroH3 = document.createElement("h3");
main.appendChild(primeiroH3);
main.appendChild(segundoH3);
main.appendChild(terceiroH3);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

