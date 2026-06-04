// Ejercicio 6: Funciones

// c. Crear una funcion validate integer que reciba un numero y devuelva verdadero si es entero.
function validateInteger(numero) {
  return Number.isInteger(numero);
}

// e. Funcion separada para validar y redondear (Logica pedida en 6d)
function validarYRedondear(valor) {
  if (!validateInteger(valor)) {
    alert(
      "ERROR: El numero " +
        valor +
        " tiene decimales. Se procedera a redondearlo.",
    );
    return Math.round(valor);
  }
  return valor;
}

// a, b, d, e. Funcion suma unificada con todas las capas de validacion requeridas
function suma(a, b) {
  // Validacion 6b: Controlar si alguno de los parametros no es un numero
  if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b)) {
    alert("ERROR: Uno de los parametros no es un numero valido.");
    return NaN;
  }

  // Validacion 6d/6e: Comprobar enteros y redondear si tienen decimales usando la funcion del punto e
  a = validarYRedondear(a);
  b = validarYRedondear(b);

  return a + b;
}

// Parte Interactiva
function calcularSumaManual() {
  let stringA = document.getElementById("input-a").value.trim();
  let stringB = document.getElementById("input-b").value.trim();

  let numA = parseFloat(stringA);
  let numB = parseFloat(stringB);

  // Si no es un numero parseable, pasamos el string original para que falle la validacion de tipo
  let parametroA = isNaN(numA) || stringA === "" ? stringA : numA;
  let parametroB = isNaN(numB) || stringB === "" ? stringB : numB;

  // Chequeo dinamico del tipo de valor ingresado
  let mensajeChequeo = "";

  if (typeof parametroA !== "number") {
    mensajeChequeo = "No es un numero";
  } else if (validateInteger(parametroA)) {
    mensajeChequeo = "Es un numero entero";
  } else {
    mensajeChequeo = "Es un numero decimal";
  }

  document.getElementById("func-c").textContent = mensajeChequeo;

  // Exec logica inicial
  let resultadoFinal = suma(parametroA, parametroB);

  if (isNaN(resultadoFinal)) {
    document.getElementById("func-de").textContent = "NaN";
  } else {
    document.getElementById("func-de").textContent = resultadoFinal;
  }
}

// Ejecuciones de Pruebas Estaticas (Punto A, B)

// Prueba Punto A estatica
let fx_resultadoA = suma(10, 20);
document.getElementById("func-a").textContent = fx_resultadoA;

// Prueba Punto B estatica
document.getElementById("func-b").textContent =
  "NaN (Ejecutar manualmente con texto para ver el alert)";
