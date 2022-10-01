/**
 * Se crea funcion que calcula la fecha
 */

 /* function calcularFecha() {
    console.log("ok")
  }
 */

  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  function calcularFecha() {
    // Obtener los valores de los inputs
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
  
    console.log({ dayInput, monthInput, yearInput });
    console.log("seguimos bien")

// Generar una fecha
const date = new Date(yearInput, monthInput - 1, dayInput);
  const dayIndex = date.getDay();

  const dayLabel = diasSemana[dayIndex]; // diasSemana[0] = 'Domingo'
  console.log(dayLabel); // Domingo || Lunes || Martes ...etc.
  let message = "";
  switch (dayIndex) {
    case 0: case 6: // 0: Domingo, 6: Sabado
      message = "No es dia laboral";
      break;
    default: // 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes
      message = "Es dia laboral";
      break;
  }

  // Mostrar el resultado en el HTML
  const resultElement = document.getElementById('result'); // sin value
  resultElement.value = `${dayLabel}, ${message}`; 



  }


  