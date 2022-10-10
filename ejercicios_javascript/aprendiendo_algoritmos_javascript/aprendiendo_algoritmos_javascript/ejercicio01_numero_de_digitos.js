/*
Escribe un programa que dado un numero entero positivo cualquiera, devuelve el número de dígitos que lo componen. Ej:

El número de digitos de 4567 es 4
El número de digitos de 423467 es 6
El número de digitos de 457 es 3

Puntos extra si no conviertes el número a string, ni utilizas ningún metodo de strings.
*/

function digitos(n) {
  if (!n)
    return 0;
  if (n < 10)
    return 1;
  return 1 + digitos(Math.floor(n / 10));
}


for (let x of getRndArray(10, 0, 15))
  console.log(`${x} => ${digitos(x)}`)

/**********************************************************/
/******* FUNCIONES AUXILIARES A CONTINUACIÓN **************/
/**********************************************************/

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
