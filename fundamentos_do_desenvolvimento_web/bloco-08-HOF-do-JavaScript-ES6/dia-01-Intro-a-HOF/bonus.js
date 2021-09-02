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

function dragonDamage(param1){
  const minDamage = 15;
  const strength = param1;
  
  return Math.round(Math.random() * (strength - minDamage) + minDamage);
};

console.log(dragonDamage(dragon.strength));

