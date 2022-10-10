/*
 EJERCICIO: Calcular la distribución estadistica de la función Random() de JavaScript
  (es decir, la frecuencia con la que genera cada numero del 0 al 9).
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function randomDistributionMap(poolSize) {
  const distribution = new Map();
  let rnd;
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    distribution.set(i, 0);
  }

  for (let i = 0; i < poolSize; i++) {
    rnd = getRndInteger(0, 10);
    sum = distribution.get(rnd) + 1;
    distribution.set(rnd, sum);
  }
  return distribution;
}



function printMap(m){
  for([k,v] of m){
    console.log(k+" => "+v);
  }
}

function printMapDistribution(m,poolSize){
  for([k,v] of m){
    console.log(k+" => "+(100.0*v/poolSize)+"%");
  }
}



let poolSize = 100000000;
//printMapDistribution(randomDistributionMap(poolSize), poolSize);
console.log(Math.random())