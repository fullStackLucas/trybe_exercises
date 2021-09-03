// Use `arrayIdades` e `arrayIdades2` para o exercício 1

// 1 - Temos uma lista com os dados de pessoas inscritas na nossa pagina e com base nesses dados queremos mandar algum tipo de anuncio para elas(todas tem que receber o mesmo anuncio), temos de cerveja (que pagam mais) e de chocolate, mas não podemos mandar o de cerveja para menores de 18 anos, precisamos de um algoritmo que analise um array com as idades das pessoas inscritas e nos diga qual anuncio devemos mandar.

// Retorno esperado:
// "Beba Trybeer, suave como um log de erro vazio"
// ou
// "ChocoTrybe, melhor que console.log".

const arrayIdades = [23, 32, 17, 16, 34]
const arrayIdades2 = [23, 32, 27, 46, 34]

/* arrayIdades.every((age, index) => {
  if (age[index] >= 18) {
  console.log('Beba Trybeer, suave como um log de erro vazio')
  } else {
  console.log('ChocoTrybe, melhor que console.log')
  }
}); */

const idades = arrayIdades.every((age) => age >= 18) ? console.log('Beba Trybeer, suave como um log de erro vazio') : console.log('ChocoTrybe, melhor que console.log');

const idades2 = arrayIdades2.every((age) => age >= 18) ? console.log('Beba Trybeer, suave como um log de erro vazio') : console.log('ChocoTrybe, melhor que console.log');

idades;
idades2;
// Use o array `estudantes` para o exercício 2:


const estudantes = [
  {
    nome: 'Henrique Baêta',
    projeto: 'Trybewarts',
    status: 88,
  },
  {
    nome: 'Rodrigo da Rosa',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Gabrielle Martines',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Isaac Batista',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Ana Duarte',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Jéssica Lopes',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald Lima',
    projeto: 'Trybewarts',
    status: 75,
  },
]
// 2 - Aqui na trybe estamos planejando um bot que vai nos ajudar a planejar as mentorias e o primeiro passo é ver se teremos uma mentoria de projetos passados, pra isso precisamos checar os dados das pessoas estudantes e verificar se tem alguem que ainda não terminou o projeto, caso tenha o bot deve nos retornar a msg "Bora pra mentoria de projetos!" ou "Pode abrir o suco de laranja que temos 100% de aprovação!".

const checkStudants = estudantes.every((estudante) => estudante.status >= 80) ? console.log('Pode abrir o suco de laranja que temos 100% de aprovação!') : console.log('Bora pra mentoria de projetos!');

checkStudants;


// sort

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

people.sort((a, b) => b.age - a.age);

console.log(people);
