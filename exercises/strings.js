// Ejercicio 2: Strings

// a. Convertir todo el texto en mayúscula (mínimo 10 caracteres).
let textoCompletoMayo = "programacion";
let resultadoA = textoCompletoMayo.toUpperCase();
console.log("Ejercicio 2a - Texto en mayúscula:", resultadoA);
document.getElementById("string-a").textContent = resultadoA;

// b. Generar un nuevo string con los primeros 5 caracteres usando substring.
let textoCincoLetras = "computadora";
let resultadoB = textoCincoLetras.substring(0, 5);
console.log("Ejercicio 2b - Primeros 5 caracteres:", resultadoB);
document.getElementById("string-b").textContent = resultadoB;

// c. Generar un nuevo string con los últimos 3 caracteres usando substring.
let textoTresLetras = "arquitectura";
let resultadoC = textoTresLetras.substring(textoTresLetras.length - 3);
console.log("Ejercicio 2c - Últimos 3 caracteres:", resultadoC);
document.getElementById("string-c").textContent = resultadoC;

// d. Primera letra en mayúscula y las demás en minúscula usando substring, toUpperCase, toLowerCase y +.
let textoCapitalizar = "javascript";
let resultadoD =
  textoCapitalizar.substring(0, 1).toUpperCase() +
  textoCapitalizar.substring(1).toLowerCase();
console.log("Ejercicio 2d - Texto capitalizado:", resultadoD);
document.getElementById("string-d").textContent = resultadoD;

// e. Encontrar la posición del primer espacio en blanco usando indexOf.
let textoConEspacio = "desarrollo web";
let resultadoE = textoConEspacio.indexOf(" ");
console.log("Ejercicio 2e - Posición del primer espacio:", resultadoE);
document.getElementById("string-e").textContent = resultadoE;

// f. Dos palabras largas. Primera letra de ambas en mayúscula y las demás en minúscula.
let textoDosPalabras = "ingenieria sistemas";
let primerEspacio = textoDosPalabras.indexOf(" ");
let palabraUno = textoDosPalabras.substring(0, primerEspacio);
let palabraDos = textoDosPalabras.substring(primerEspacio + 1);
let resultadoF =
  palabraUno.substring(0, 1).toUpperCase() +
  palabraUno.substring(1).toLowerCase() +
  " " +
  palabraDos.substring(0, 1).toUpperCase() +
  palabraDos.substring(1).toLowerCase();
console.log("Ejercicio 2f - Texto con dos palabras capitalizadas:", resultadoF);
document.getElementById("string-f").textContent = resultadoF;
