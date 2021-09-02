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






