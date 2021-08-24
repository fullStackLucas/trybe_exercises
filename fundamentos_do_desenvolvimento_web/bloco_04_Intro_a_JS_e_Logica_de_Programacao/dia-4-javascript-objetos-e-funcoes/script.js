// parte I - Objetos For/in

// 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //console.log ("Bem vinda, " + info.personagem);

  // 2

  info.recorrente = "sim";

  /* 3

  for (key in info) {
      console.log(key);
  }; */

  /* 4 

  for (key in info) {
    console.log(info[key]);
}; */

// 5

let segundoObjeto = Object.create(info);
segundoObjeto.personagem = "Tio Patinhas";
segundoObjeto.origem = "Christmas on Bear Mountain, Dell's Four Color Comics #178";
segundoObjeto.nota = "O último MacPatinhas";
segundoObjeto.recorrente = "sim";


for (let key in info, segundoObjeto) {
    if (info[key] !== segundoObjeto[key]) {
        console.log(info[key] + " e " + segundoObjeto[key]);
    } else {
        console.log("Ambos recorrentes");
    }
};




