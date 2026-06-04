// Ejercicio 3: Arrays

// Array base brindado por la consigna
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// a. Mostrar por consola los meses 5 (Mayo -> índice 4) y 11 (Noviembre -> índice 10).
console.log("Ejercicio 3a - Mes 5:", meses[4]);
console.log("Ejercicio 3a - Mes 11:", meses[10]);
document.getElementById("array-a").textContent = meses[4] + " y " + meses[10];

// b. Ordenar el array alfabéticamente y mostrarlo por consola (utilizar sort).
let mesesOrdenados = [...meses].sort();
console.log("Ejercicio 3b - Ordenado alfabéticamente:", mesesOrdenados);
document.getElementById("array-b").textContent = mesesOrdenados.join(", ");

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses.unshift("InicioAño");
meses.push("FinAño");
console.log("Ejercicio 3c - Con elementos añadidos:", meses);
document.getElementById("array-c").textContent = JSON.stringify(meses);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
meses.shift();
meses.pop();
console.log("Ejercicio 3d - Después de quitar elementos:", meses);
document.getElementById("array-d").textContent = JSON.stringify(meses);

// e. Invertir el orden del array (utilizar reverse).
let mesesInvertidos = [...meses].reverse();
console.log("Ejercicio 3e - Orden invertido:", mesesInvertidos);
document.getElementById("array-e").textContent = mesesInvertidos.join(", ");

// f. Unir todos los elementos en un único string separado por un guión (utilizar join).
let stringMeses = meses.join(" - ");
console.log("Ejercicio 3f - Meses unidos en un string:", stringMeses);
document.getElementById("array-f").textContent = stringMeses;

// g. Crear una copia del array que contenga desde Mayo hasta Noviembre (utilizar slice).
let copiaMeses = meses.slice(4, 11);
console.log("Ejercicio 3g - Copia de Mayo a Noviembre:", copiaMeses);
document.getElementById("array-g").textContent = copiaMeses.join(", ");
