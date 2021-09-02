const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra') , // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newInput = (name) => {
  const email = name.replace(' ', '_').toLowerCase();
  return {
    fullName: name,
    email: `${email}@betrybe.com.br`,
  }
}

// 2 Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const drawResult = (number, callback) => {
  const hofNumber = Math.ceil(Math.random() * 5);
  if (callback(number, hofNumber) === true) {
    return `O número sorteado foi ${hofNumber}. Parabéns, você ganhou!!`
  } else {
    return `O número sorteado foi ${hofNumber}. Tente Novamente`
  }
};

const checkNumber = (number, drawNumber) => {
  if (number === drawNumber) {
    return true;
  } else {
    return false;
  }
};

// console.log(drawResult(5, checkNumber));

//  Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas. 

//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.


const finalScore = (answersSheet, studentAnswers, check) => {
  return `Sua nota final foi: ${check(answersSheet, studentAnswers)}`
};

const check = (answersSheet, studantAnswers) => {
  let score = 0
  for (let index = 0; index < answersSheet.length; index +=1){
    if (answersSheet[index] === studantAnswers[index]) {
      score += 1;
    } else if(studantAnswers[index] === 'N.A') {
      score = score;
    } else {
      score -= 0.5;
    }
  }
  return score;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// console.log(finalScore(RIGHT_ANSWERS, STUDENT_ANSWERS, check));


