/*
Escribe un programa que calcule la edad del usuario a partir de su fecha de nacimiento:

- Ingrese su fecha de nacimiento.
- Dia: 14
- Mes: 6
- Año: 1948
- Usted tiene 62 años

Por supuesto, el resultado calculado depende del día en que el programa será ejecutado.
*/

let año = 1994;
let mes = 03;
let dia = 03;

let fechaNacimiento = new Date(año, mes, dia);
let hoy = new Date();
let edad = (new Date(hoy.getTime()-fechaNacimiento.getTime() ).getFullYear())-1970;
let edad2 = (new Date(hoy - fechaNacimiento)).getFullYear()-1970;
console.log("Edad", edad)
console.log("Edad", edad2)

