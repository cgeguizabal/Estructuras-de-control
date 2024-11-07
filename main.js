//Ejercicio 1

function overAge(age) {
  age >= 18 ? console.log("You're over age") : console.log("you're underage");
}

overAge(17);
overAge(20);

//Ejercicio 2
function finalGrade(
  studentName,
  studentId,
  studentExam,
  studentAssignments,
  studentAttendance,
  studentResearch
) {
  let exam = 20;
  let assignments = 40;
  let attendance = 10;
  let research = 30;
  let finalGrade =
    ((studentExam / 10) * exam +
      (studentAssignments / 10) * assignments +
      (studentAttendance / 10) * attendance +
      (studentResearch / 10) * research) /
    10;

  let finalReturn = `The student ${studentName} with ID number: ${studentId}; final grade is ${finalGrade}`;
  console.log(finalReturn);
  return finalReturn;
}

finalGrade("Guillermo", 140516, 8, 6, 9, 10);

//Ejercicio 3
function aumentoSalario(name, salary, category) {
  let encrease = salary;
  if (category === "A") {
    encrease += salary * (15 / 100);
  } else if (category === "B") {
    encrease += salary * (30 / 100);
  } else if (category === "C") {
    encrease += salary * (10 / 100);
  } else if (category === "D") {
    encrease += salary * (20 / 100);
  }
  let finalData = `
  Nombre: ${name}.
  Salario: ${salary}.
  Categoria:${category}.
  Aumento:${encrease}`;

  console.log(finalData);
  return finalData;
}

aumentoSalario("Guillermo", 500, "A");
aumentoSalario("Guillermo", 500, "B");
aumentoSalario("Guillermo", 500, "C");
aumentoSalario("Guillermo", 500, "D");

//Ejercicio 4
function greatestNumber(num1, num2) {
  let theNumber = num1 > num2 ? num1 : num2;
  console.log(theNumber);
  return theNumber;
}

greatestNumber(50, 25);

//Ejercicio 5
function cars(carModel) {
  if (carModel === "FORD FIESTA") {
    document.write(
      `Haz seleccionado ${carModel} y obtienes un descuento de 5% en tu compra`
    );
  } else if (carModel === "FORD FOCUS") {
    document.write(
      `Haz seleccionado ${carModel} y obtienes un descuento de 10% en tu compra`
    );
  } else if (carModel === "FORD ESCAPE") {
    document.write(
      `Haz seleccionado ${carModel} y obtienes un descuento de 20% en tu compra`
    );
  }
}

cars("FORD FOCUS");

//Ejercicio 6
function viajes(origen, destino) {
  if (origen === "Palma" && destino === "La costa del Sol") {
    console.log("Tienes un descuento de 5%");
  } else if (origen === "Palma" && destino === "Panchimalco") {
    console.log("Tienes un descuento de 10%");
  } else if (origen === "Palma" && destino === "Puerto el Triunfo") {
    console.log("Tienes un descuento de 15%");
  }
}

viajes("Palma", "Puerto el Triunfo");

//Ejercicio 7

function cantidad(array) {
  let negativos = [];
  let positivos = [];
  let multiplos = [];
  let paresJuntos = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] < 0) {
      negativos.push(array[i]);
    } else if (array[i] > 0) {
      positivos.push(array[i]);
    }

    if (array[i] % 15 == 0) {
      multiplos.push(array[i]);
    }

    if (array[i] % 2 == 0) {
      paresJuntos += array[i];
    }
  }
  let results = `
  Valores negativos ingresados: ${negativos}
  Valores positivos ingresados: ${positivos}
  Multiplos de 15: ${multiplos}
  Suma de valores pares: ${paresJuntos}`;

  console.log(results);
  return results;
}

cantidad([12, 15, 30, 2, 5, 8, -9, -4, 7, 3]);

//Ejercicio 8

function multiplicar(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n}x${i} = ${n * i}`);
  }
}

multiplicar(2);

//Ejercicio 9

function temperatura(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  let estado =
    (fahrenheit > 14 &&
      fahrenheit < 32 &&
      `Temperatura baja. °${fahrenheit}`) ||
    (fahrenheit > 32 &&
      fahrenheit < 68 &&
      `Temperatura adecuada. °${fahrenheit}`) ||
    (fahrenheit > 68 &&
      fahrenheit < 96 &&
      `Temperatura alta. °${fahrenheit}`) ||
    ((fahrenheit < 14 || fahrenheit > 96) && `Temperatura desconocida`);

  console.log(estado);
  return estado;
}

temperatura(-8);
temperatura(18);
temperatura(27);
temperatura(-27);
temperatura(50);

//Ejercicio 10
let edadesM = prompt(
  "Ingrese las edades de los 5 estudiantes del turno mañana, separadas por comas:"
);
edadesM = edadesM.split(",").map(Number);

let edadesT = prompt(
  "Ingrese las edades de los 6 estudiantes del turno mañana, separadas por comas:"
);
edadesT = edadesT.split(",").map(Number);

let edadesN = prompt(
  "Ingrese las edades de los 11 estudiantes del turno mañana, separadas por comas:"
);
edadesN = edadesN.split(",").map(Number);

function calculadora() {
  function edades(estudiantes) {
    let promedio = 0;
    for (let i = 0; i <= estudiantes.length; i++) {
      return (promedio += estudiantes[i]);
    }
  }
  let promedioM = edades(edadesM);
  let promedioT = edades(edadesT);
  let promedioN = edades(edadesN);
  console.log(`Promedio de la manana ${promedioM}`);
  console.log(`Promedio de la tarde ${promedioT}`);
  console.log(`Promedio de la noche ${promedioN}`);

  if (promedioM > promedioT && promedioM > promedioN) {
    document.write("El turno de la manana el de promedio mayor");
  } else if (promedioT > promedioM && promedioT > promedioN) {
    document.write("El turno de la tarde el de promedio mayor");
  } else {
    document.write("El turno de la noche el de promedio mayor");
  }
}
calculadora();
