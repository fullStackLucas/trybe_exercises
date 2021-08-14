  function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  
    
  // Escreva seu código abaixo.
  
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  

  function createDays() {
  let daysList = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let rename = document.createElement("li");
    rename.innerHTML = day;

    if (day === 24 || day === 31) {
      rename.className = "day holiday";      
      daysList.appendChild(rename);

    } else if (day === 4 || day === 11 || day === 18) {
      rename.className = "day friday";      
      daysList.appendChild(rename);

    } else if (day === 25) {
      rename.className = "day holiday friday";      
      daysList.appendChild(rename);

    } else {      
      rename.className = "day";
      daysList.appendChild(rename);
    }
  };
};
createDays();


  /*let li = document.createElement("li");
  let date = document.querySelector("#days");
  li.innerHTML = 29
  date.appendChild(li);*/
