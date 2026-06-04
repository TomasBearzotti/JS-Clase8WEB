// Ejercicio 5: For

// a. Crear un array con 5 palabras y recorrerlo mostrando cada una por consola.
let palabras = ["computacion", "sistemas", "codigo", "pantalla", "servidor"];
let palabrasRecorridas = [];
for (let i = 0; i < palabras.length; i++) {
  console.log("Ejercicio 5a - Palabra:", palabras[i]);
  palabrasRecorridas.push(palabras[i]);
}

document.getElementById("for-a").textContent = palabrasRecorridas.join(", ");

// b. Convertir la primera letra de cada palabra en mayúscula y mostrar por consola.
let palabrasModificadas = [];

for (let i = 0; i < palabras.length; i++) {
  let palabraCapitalizada =
    palabras[i].substring(0, 1).toUpperCase() +
    palabras[i].substring(1).toLowerCase();
  console.log("Ejercicio 5b - Modificada:", palabraCapitalizada);
  palabrasModificadas.push(palabraCapitalizada);
}

document.getElementById("for-b").textContent = palabrasModificadas.join(", ");

// c. Recorrer el array guardando cada palabra dentro de una variable "sentence" vacía. Mostrar la cadena completa al final.
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  if (i === 0) {
    sentence += palabras[i];
  } else {
    sentence += " " + palabras[i];
  }
}
console.log("Ejercicio 5c - Sentence unificada:", sentence);
document.getElementById("for-c").textContent = sentence;

// d. Crear un array vacío y llenarlo con un for de 10 repeticiones (del 0 al 9). Mostrar por consola.
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log("Ejercicio 5d - Array numérico final:", numeros);
document.getElementById("for-d").textContent = JSON.stringify(numeros);
