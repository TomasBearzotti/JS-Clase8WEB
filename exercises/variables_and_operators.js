// Ejercicio 1: Variables y Operadores

// a. Crear dos variables numéricas y guardar el valor de la suma en una 3er variable.
let numero1 = 15;
let numero2 = 25;
let resultadoSuma = numero1 + numero2;
console.log("Ejercicio 1a - El resultado de la suma es: " + resultadoSuma);
document.getElementById("resultado-suma").textContent = resultadoSuma;

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
let textoA = "Hola ";
let textoB = "Profe";
let textoConcatenado = textoA + textoB;
console.log("Ejercicio 1b - El texto concatenado es: " + textoConcatenado);
document.getElementById("resultado-concatenacion").textContent =
  textoConcatenado;

// c. Crear dos variables de tipo String y sumar el largo de cada variable guardando el resultado en una 3er variable.
let palabra1 = "Rosario";
let palabra2 = "Central";
let largoTotal = palabra1.length + palabra2.length;
console.log("Ejercicio 1c - El largo total es: " + largoTotal);
document.getElementById("resultado-largo").textContent =
  largoTotal + " caracteres";
