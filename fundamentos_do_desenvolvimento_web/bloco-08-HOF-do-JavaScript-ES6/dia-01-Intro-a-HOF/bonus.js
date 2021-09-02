const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function dragonDamage(str){
  const minDamage = 15;
  const strength = str;
  
  return Math.round(Math.random() * (strength - minDamage) + minDamage);
};

// console.log(dragonDamage(dragon.strength));

function warriorDamage(str, weapon){
  const minDamage = str;
  const weaponDamage = weapon;
  const maxDamage = str * weapon;

  return Math.round(Math.random() * (maxDamage - minDamage) + minDamage);
}

// console.log(warriorDamage(warrior.strength, warrior.weaponDmg));

//Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

function mageDamage (person) {
  if (person.mana < 15) {
    const damage = 'Não possui mana suficiente';
    return damage;
  } else {  
  const minDamage = person.intelligence;
  const consumedMana = 15;
  const maxDamage = person.intelligence * 2;
  const currentMana = person.mana - consumedMana
  const damage = Math.round(Math.random() * (maxDamage - minDamage) + minDamage);
  const result = {
    damage,
    mana: currentMana
  }  
  return result;
  }
}

// console.log(mageDamage(mage));






