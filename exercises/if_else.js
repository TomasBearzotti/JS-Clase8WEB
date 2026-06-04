// Ejercicio 4: If Else

// a. Crear un número aleatorio entre 0 y 1 y mostrar un mensaje indicando si es mayor o menor a 0.5.
function ejecutarPuntoA() {
  let numeroAleatorio = Math.random();
  let mensajeA = "";
  if (numeroAleatorio >= 0.5) {
    mensajeA = "Mayor que 0,5";
  } else {
    mensajeA = "Menor que 0,5";
  }

  console.log(
    "Ejercicio 4a - Número:",
    numeroAleatorio,
    "| Resultado:",
    mensajeA,
  );
  document.getElementById("if-else-a").textContent =
    numeroAleatorio.toFixed(4) + " (" + mensajeA + ")";
}

// b. Generar una edad aleatoria entera entre 0 y 100 y mostrar un mensaje indicando a qué rango de edad pertenece según los criterios
function ejecutarPuntoB() {
  let age = Math.floor(Math.random() * 101);
  let mensajeB = "";
  if (age < 2) {
    mensajeB = "Bebe";
  } else if (age >= 2 && age <= 12) {
    mensajeB = "Niño";
  } else if (age >= 13 && age <= 19) {
    mensajeB = "Adolescente";
  } else if (age >= 20 && age <= 30) {
    mensajeB = "Joven";
  } else if (age >= 31 && age <= 60) {
    mensajeB = "Adulto";
  } else if (age >= 61 && age <= 75) {
    mensajeB = "Adulto mayor";
  } else {
    mensajeB = "Anciano";
  }

  console.log("Ejercicio 4b - Edad:", age, "años | Categoría:", mensajeB);
  document.getElementById("if-else-b").textContent =
    age + " años -> " + mensajeB;
}

// --- Ejecución Inicial ---
ejecutarPuntoA();
ejecutarPuntoB();
