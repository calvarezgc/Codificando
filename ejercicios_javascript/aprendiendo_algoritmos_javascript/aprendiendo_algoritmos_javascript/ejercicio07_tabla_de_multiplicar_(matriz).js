
/*
Escribe un programa que muestre una tabla de multiplicar como la siguiente:
```
 1   2   3   4   5   6   7   8   9  10
 2   4   6   8  10  12  14  16  18  20
 3   6   9  12  15  18  21  24  27  30
 4   8  12  16  20  24  28  32  36  40
 5  10  15  20  25  30  35  40  45  50
 6  12  18  24  30  36  42  48  54  60
 7  14  21  28  35  42  49  56  63  70
 8  16  24  32  40  48  56  64  72  80
 9  18  27  36  45  54  63  72  81  90
10  20  30  40  50  60  70  80  90 100
```
Puntos extra si los números se muestran en la consola alineados a la derecha. OJO: hacerlo eficientemente es más bastante más complicado de lo que parece.
*/
function imprimirTablaMultiplicar() {
  const numbers = range(1, 30);

  let linea = "";
  let spaces;
  let m;
  for (let i of numbers) {
    for (j of numbers) {
      m = i * j;
      spaces = " ".repeat(digitos(numbers[numbers.length - 1] * j + 1)-digitos(m)+1);
      linea += spaces + m;
    }
    console.log(linea);
    linea = "";
  }
}

function range(min, max) {
  if (!max)
    return Array.from(new Array(min), (x, i) => i);
  return Array.from(new Array(max), (x, i) => i + min);
}

function digitos(n) {
  if (!n)
    return 0;
  if (n < 10)
    return 1;
  return 1 + digitos(Math.floor(n / 10));
}

imprimirTablaMultiplicar();