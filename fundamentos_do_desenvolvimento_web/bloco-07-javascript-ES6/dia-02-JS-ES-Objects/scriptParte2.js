const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addMorningTurn = (object, key, value) => {
  object[key] = value
}

addMorningTurn(lesson2, 'turno', 'manhã');


// parte 2

const showKeys = (object) => {
  return Object.keys(object)
}

showKeys(lesson2)

// parte 3

const objectLength = (object) => {
  return Object.entries(object).length
}

console.log (`O objeto tem ${objectLength(lesson2)} elementos`);

// parte 4

const showValues = (object) => {
  return Object.values(object)
};

showValues(lesson2);

// parte 5

