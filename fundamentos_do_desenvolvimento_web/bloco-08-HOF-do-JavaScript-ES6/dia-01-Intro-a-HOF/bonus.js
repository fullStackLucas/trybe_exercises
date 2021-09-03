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

function dragonDamage(){
  const minDamage = 15;
  const strength = dragon.strength;
  const damage = Math.round(Math.random() * (strength - minDamage) + minDamage);
  return damage;
};

// console.log(dragonDamage());

function warriorDamage(){
  const minDamage = warrior.strength;
  const weaponDamage = warrior.weaponDmg;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const damage = Math.round(Math.random() * (maxDamage - minDamage) + minDamage);
  return damage;
}

// console.log(warriorDamage());

//Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

function mageDamage () {
  if (mage.mana < 15) {
    const damage = 'Não possui mana suficiente';
    return damage;
  } else {  
  const minDamage = mage.intelligence;
  const consumedMana = 15;
  const maxDamage = mage.intelligence * 2;
  const currentMana = mage.mana - consumedMana
  const damage = Math.round(Math.random() * (maxDamage - minDamage) + minDamage);
  const result = {
    damage,
    mana: currentMana
  } 
  return result;
  }
}


const gameActions = {
  warrior: function (warriorDamage) {
    let dragonHealth = dragon.healthPoints
    const warriorAttak = warriorDamage()
    warrior.damage = warriorAttak
    dragonHealth = dragonHealth - warriorAttak
    dragon.healthPoints = dragonHealth;
  },
  mage: function (mageDamage) {
    let dragonHealth = dragon.healthPoints;
    const mageAttak = mageDamage()
    mage.damage = mageAttak.damage;
    mage.mana = mageAttak.mana
    dragonHealth = dragonHealth - mageAttak.damage;  
    dragon.healthPoints = dragonHealth;  
  },
  dragon: function (dragonDamage) {
    let mageHealth = mage.healthPoints;
    let warriorHealth = warrior.healthPoints;
    const dragonAttak = dragonDamage();
    mageHealth -= dragonAttak;
    warriorHealth -= dragonAttak;
    mage.healthPoints = mageHealth;
    warrior.healthPoints = warriorHealth;
    dragon.damage = dragonAttak;
  },
  turn: () => battleMembers,
};

// console.table(gameActions.mage(mageDamage));


// console.log(warriorDamage())
console.table(battleMembers)
gameActions.warrior(warriorDamage);
gameActions.mage(mageDamage);
gameActions.dragon(dragonDamage);
console.table(gameActions.turn())


