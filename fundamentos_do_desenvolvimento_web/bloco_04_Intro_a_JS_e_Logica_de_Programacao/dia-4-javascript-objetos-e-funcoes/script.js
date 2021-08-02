// parte I - Objetos For/in

// 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //console.log ("Bem vinda, " + info.personagem);

  // 2

  info.recorrente = "Sim";

  /* 3

  for (key in info) {
      console.log(key);
  }; */

  // 4 

  for (key in info) {
    console.log(info[key]);
};

