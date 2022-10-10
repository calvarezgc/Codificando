/*
Los siguientes ejercicios están diseñados para hacerte pensar sobre algoritmos de ordenación. Hay multitud de algoritmos de ordenación, algunos más eficientes que otros, y todos ellos de sobra conocidos y documentados. Aunque no los hemos visto en clase, te animo a pensar para cada uno de los siguientes ejercicios la manera más eficiente de obtener la solución, pensando por tu cuenta sin buscar la respuesta en internet.

Resuelve los siguientes ejercicios en orden. No leas el siguiente ejercicio sin haber resuelto el anterior primero.

Hay más de una manera de resolver cada ejercicio, pero NO está permitido el uso de sort() ni reverse().

Recuerda que el programa debe entregar la solución correcta para cualquier combinación de números, no sólo para los ejemplos mostrados a continuación.
*/



/* 
8.1
Escribe un programa que reciba como entrada dos números enteros (positivos y/o negativos), y los muestre ordenados de menor a mayor. Ej:

- Ingrese numero: 51
- Ingrese numero: 24
- Resultado ordenado: [24, 51]
*/

function ordenar2numeros(x, y) {
  if (x < y)
    return [x, y];
  return [y, x]
}

// DEMOSTRACIÓN 8.1
let x = getRndInteger(-10, 10);
let y = getRndInteger(-10, 10);
console.log("\nEjercicio 8.1");
console.log(`${x}, ${y} => [${ordenar2numeros(x, y)}]`)




/* ******************************************************************************************************
8.2
Cuando hayas resuelto el anterior ejercicio, escribe otro programa que haga lo mismo con tres números:

- Ingrese numero: 8
- Ingrese numero: 1
- Ingrese numero: 4
- Resultado ordenado: [1, 4, 8]
*/

function ordenar3numeros(x, y, z) {
  result = [];
  if (x <= y && x <= z) {
    result.push(x);
    result = result.concat(ordenar2numeros(y, z));
  }
  else if (y < x && y < z) {
    result.push(y);
    result = result.concat(ordenar2numeros(x, z));
  }
  else {
    result.push(z);
    result = result.concat(ordenar2numeros(x, y));
  }
  return result;
}

// DEMOSTRACIÓN 8.2
console.log("\nEjercicio 8.2");
let z = getRndInteger(-10, 10);
console.log(`${x}, ${y}, ${z} => [${ordenar3numeros(x, y, z)}]`);




/*******************************************************************************************************
8.3
Cuando hayas resuelto los anteriores ejercicios, escribe un tercer programa que ordene cuatro números:

- Ingrese numero: 7
- Ingrese numero: 0
- Ingrese numero: 6
- Ingrese numero: 1
- Resultado ordenado: [0, 1, 6, 7]
*/

function ordenar4numeros(x, y, z, w) {
  result = [];
  if (x <= y && x <= z && x <= w) {
    result.push(x);
    result = result.concat(ordenar3numeros(y, z, w));
  }
  else if (y <= x && y <= z && y <= w) {
    result.push(y);
    result = result.concat(ordenar3numeros(x, z, w));
  }
  else if (z <= x && z <= y && z <= w) {
    result.push(z);
    result = result.concat(ordenar3numeros(x, y, w));
  } else {
    result.push(w)
    result = result.concat(ordenar3numeros(x, y, w));
  }
  return result;
}

// DEMOSTRACIÓN 8.3
console.log("\nEjercicio 8.3");
let w = getRndInteger(-10, 10);
console.log(`${x}, ${y}, ${z}, ${w} => [${ordenar4numeros(x, y, z, w)}]`);








