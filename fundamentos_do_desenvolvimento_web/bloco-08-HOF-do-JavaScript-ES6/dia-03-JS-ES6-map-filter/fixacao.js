const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsAndPrices = {}; 

function attribute (products, prices) {
  products.map((product, index) => productsAndPrices[product] = prices[index]);
};

attribute (products, prices);

console.log (productsAndPrices);