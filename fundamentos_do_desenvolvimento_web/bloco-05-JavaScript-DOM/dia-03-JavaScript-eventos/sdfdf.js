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


  // exercicio 1
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  

  function createDays() {
    let daysList = document.querySelector("#days");

    for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let days = document.createElement("li");
      days.innerHTML = day;

      if (day === 24 || day === 31) {
        days.className = "day holiday";      
        daysList.appendChild(days);

      } else if (day === 4 || day === 11 || day === 18) {
        days.className = "day friday";      
        daysList.appendChild(days);

      } else if (day === 25) {
        days.className = "day holiday friday";      
        daysList.appendChild(days);

      } else {      
        days.className = "day";
        daysList.appendChild(days);
      }
    };
};

createDays();

// exercicio 2
let divButtons = document.querySelector(".buttons-container");

function holidayButton (Feriados){
  let buttonHolidays = document.createElement("button");
  buttonHolidays.id("btn-holiday");
  buttonHolidays = document.querySelector("#btn-holiday");
  divButtons.appendChild(buttonHolidays);
};

holidayButton("Feriados");

