const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

let tech = document.querySelector(".tech");

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
// inicio
firstLi.addEventListener("click", classTech);
secondLi.addEventListener("click", classTech);
thirdLi.addEventListener("click", classTech);

function classTech (element){
  firstLi.classList.remove("tech");
  secondLi.classList.remove("tech");
  thirdLi.classList.remove("tech");
  
  element.target.classList.add("tech");
  tech = document.querySelector(".tech");
};
// fim
//inicio 2
input.addEventListener("input", changeTechText)

function changeTechText(event){
  let text = input.value;
  tech.innerText = text;
};
 // fim 2;
 //inicio 3 redirecionar para página da web;
 myWebpage.addEventListener("dblclick", redirect);
 function redirect (event){
   location.href = "https://www.google.com";
 };
 // fim 3;

 //inicio 4 mudar a cor do meutop3;
 myWebpage.addEventListener("mouseenter", changeColor);
 myWebpage.addEventListener("mouseleave", colorBack);
 function changeColor (event){
   myWebpage.style.color = "gray"
 };

 function colorBack (event){
   myWebpage.style.color = "white";
 };
 

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.