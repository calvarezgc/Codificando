/*******************************************************************************************************
8.4
Finalmente, escribe un programa que ordene una lista de números de cualquier longitud.
*/

/**
 * Este algoritmo es una versión ineficiente del conocido "Selection Sort"
 * Su comportamiento es el siguiente:
 * - Tomando el elemento actual [i] como referencia, lo compara con cada elemento [j] que le sucede, hasta llegar a [n].
 * - Si se da el caso de que el elemento [j] es menor que el elemento [i], el algoritmo intercambia sus posiciones (swap).
 * - Dicho de otra manera, en el bucle 'j' se busca el numero más pequeño desde la posición 'i' hasta 'n' (final), y lo coloca en [i].
 * - Dicho de otra manera, el algoritmo va buscando el siguiente número más pequeño al actual en cada bucle.
 * 
 * El algoritmo "Selection Sort" es muy parecido, pero en lugar de hacer un SWAP cada vez que encuentra un elemento más pequeño que el actual,
 * lo que hace es recordar su posición, y al final del bucle J, hace un único SWAP, ahorrandose muchas operaciones de reasignación.
 * @param {[Number]} array - Array de números enteros desordenados
 * @returns {[Number]} - array ordenado de manera ascendente
 */
 async function badSelectionSort(array) {
  let aux = null; // variable auxiliar para SWAP

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      visualizarMarcadoresBajoArray(array, [[i, 'i'], [j, 'j']]); // <-- SOLO PARA DEMOSTRACIÓN. NO ES PARTE DEL ALGORITMO
      if (array[j] < array[i]) {
        // Operación SWAP (intercambiar):
        aux = array[i];
        array[i] = array[j];
        array[j] = aux;
        visualizarMarcadoresBajoArray(array, [[i, 'I'], [j, 'J']]); // <-- SOLO PARA DEMOSTRACIÓN. NO ES PARTE DEL ALGORITMO
      }
      await sleep(velocidadAnimacion); // <-- SOLO PARA DEMOSTRACIÓN. NO ES PARTE DEL ALGORITMO
    }
  }
  return array;
}

async function selectionSort(array) {
  let aux = null; // variable auxiliar para SWAP
  let small_indx = 0; // marcador del indice con el valor más pequeño de la iteración actual

  for (let i = 0; i < array.length; i++) {
    small_indx = i; // reiniciar marcador
    for (let j = i; j < array.length; j++) {
      visualizarMarcadoresBajoArray(array, [[i, 'i'], [j, 'j'], [small_indx, '^']]);// <-- SOLO PARA DEMOSTRACIÓN. NO ES PARTE DEL ALGORITMO
      if (array[j] < array[small_indx]) {
        small_indx = j; // actualizar marcador
        visualizarMarcadoresBajoArray(array, [[i, 'i'], [j, 'j'], [small_indx, '^']]);// <-- SOLO PARA DEMOSTRACIÓN. NO ES PARTE DEL ALGORITMO
      }
      await sleep(velocidadAnimacion); // <-- SOLO PARA DEMOSTRACIÓN. NO ES PARTE DEL ALGORITMO
    }
    // A continuación, realizar operación SWAP (intercambio). NOTA: es habitual encapsular SWAP en una función aparte.
    aux = array[i];
    array[i] = array[small_indx];
    array[small_indx] = aux;
  }
  return array;
}


// DEMOSTRACIÓN 8.4
console.clear();
console.log("\nEjercicio 8.4");
const velocidadAnimacion = 0;
let numeros = range(10);
let numerosDesordenados = randomizeArrayOrder(range(100));
console.log("Array ordenado: " + numeros);
console.log("Array desordenado: " + numerosDesordenados);

console.log("Algoritmo badSelectionSort: ");
console.time("Execution time of badSelectionSort"); // cronómetro para medir velocidad de ejecución
badSelectionSort(Array.from(numerosDesordenados));
console.timeEnd("Execution time of badSelectionSort");



console.log("Algoritmo selectionSort: ");
console.time("Execution time of selectionSort"); 
selectionSort(Array.from(numerosDesordenados));
console.timeEnd("Execution time of selectionSort");

/**************************************************************************************************************/
/******************************** FUNCIONES AUXILIARES A CONTINUACIÓN *****************************************/
/**************************************************************************************************************/

function visualizarMarcadoresBajoArray(array, marcadores) {
  //const whites = " ".repeat(array.length * 2);
  let indices = " ".repeat(array.length * 2);
  for ([idx, mark] of marcadores) {
    indices = setCharAt(indices, idx * 2, mark);
  }
  console.log(`${array.toString()}\n${indices}\n`);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndArray(size, min, max) {
  if (!min)
    min = 0
  if (!max)
    max = 10
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push(getRndInteger(min, max));
  }
  return result;
}

function range(min, max) {
  if (!max)
    return Array.from(new Array(min), (x, i) => i);
  return Array.from(new Array(max), (x, i) => i + min);
}

function randomizeArrayOrder(array) {
  return array.sort(function (a, b) { return 0.5 - Math.random() });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}
