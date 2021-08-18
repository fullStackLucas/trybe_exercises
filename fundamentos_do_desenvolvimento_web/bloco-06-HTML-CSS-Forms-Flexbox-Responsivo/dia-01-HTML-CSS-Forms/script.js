let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

let estadoRequerido = document.getElementById("state")

function createState(){
  ('state');
  for(let index = 0; index < estados.length; index += 1){
    let estado = document.createElement("option");
    estado.value = estados[index]
    estado.innerHTML = estados[index];
    estadoRequerido.appendChild(estado);
  }
}

createState();