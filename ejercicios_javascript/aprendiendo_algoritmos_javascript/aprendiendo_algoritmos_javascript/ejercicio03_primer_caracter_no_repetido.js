/*
Dado un string compuesto solo por letras minúsculas, hallar el primer carácter que no se repite. Si no existe, devolver el caracter "#".
*/

/**
 *
 * @param {[String]} chars
 */
function primerCaracterNoRepetido(chars) {
  for (let c of chars) {
    if (chars.indexOf(c) != chars.lastIndexOf(c)) return c;
  }
  return "#";
}

function randomCharString(length, chars) {
  let result = "";
  if (!chars) chars = "abcdefghijklmnopqrstuvwxyz";
  //const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //const characters       = 'abcdefghijklmnopqrstuvwxyz';
  //const characters = 'abcdefghijklmnop';
  const charactersLength = chars.length;
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const randString = randomCharString(25, "abcdefghijklmnop");
console.log(randString);
console.log(primerCaracterNoRepetido(randString));
