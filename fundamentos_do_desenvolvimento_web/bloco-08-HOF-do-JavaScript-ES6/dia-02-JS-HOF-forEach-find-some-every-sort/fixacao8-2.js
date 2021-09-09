const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList);

// find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) =>  number % 3 === 0 && number % 5 ===0;

const findNumber = numbers.find(findDivisibleBy3And5);

console.log(findNumber)

// find 2 primeiro nome com 5 letras;

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const search = names.find(findNameWithFiveLetters);

console.log(search);

// find 3:  musica com id exato 31031685

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (musica) => musica.id === '31031685';

const searchId = musicas.find(findMusic);

console.log(searchId);