const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const message = (`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, nº ${order.address.number}, AP: ${order.address.apartment}`)
  
  console.log(message);

}

customerInfo(order);



order.name = 'Luiz Silva';

order.payment.total = 50;


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzas = Object.keys(order.order.pizza);
  const marguerita = pizzas[0];
  const pepperoni = pizzas[1];
  
  const mensagem = `Olá ${order.name}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`

  console.log(mensagem);
}

orderModifier(order);

