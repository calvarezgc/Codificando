/*
Escribe un programa que genere todas las potencias de 2, desde la 0-ésima hasta la ingresada por el usuario. Ej:

- Ingrese num: 10
- 1 2 4 8 16 32 64 128 256 512 1024
*/

function potenciasDe2(n){
  const result = []
  for(let i=0; i<n; i++){
    result.push(2**i);
  }
  return result;
}

console.log(potenciasDe2(10));