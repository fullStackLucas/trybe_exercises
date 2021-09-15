const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
    
    if(totalAfterExpenses > 0) {
      return 'Parabéns, seu saldo do mês foi positivo. Continue assim!'
    }
    return 'Você está no negativo, que tal repensar os gastos?! :)'
};

const calculate = (param) => {
  const valuesArray = param.map((element) => Object.values(element)[0])
  const totalValues = valuesArray.reduce((acc, element) => acc + element);
  return totalValues;
}

console.log(monthlyBudget(myIncome, myExpenses, calculate));
