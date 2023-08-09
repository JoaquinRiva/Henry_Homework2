'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //Si nuestro array tiene un solo elemento devolvemos ese array
  if(array.length <= 1){
    return array;
  }
  let izq = [];
  let der = [];
  let aux = [];
  let pivote = array.pop();
  

  for (let i = 0; i < array.length; i++) {
    //Si el numero es menor o igual al pivote pasaria al lado izq
    if (array[i] <= pivote) {
      izq.push(array[i]);
    //En caso de que sea mayor pasaria a nuestro arreglo der
    } else {
      der.push(array[i]);
    }
  }
  //Recursividad
  return aux.concat(quickSort(izq), pivote, quickSort(der));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //Si el array recibido es menor o igual a 1 devuelvo el array
  if(array.length <= 1){
    return array;
  }
  //un let para pararnos en el medio del array
  let medio = Math.floor(array.length / 2);
  let izqMerge = mergeSort(array.slice(0, medio));
  let derMerge = mergeSort(array.slice(medio));
  return merge(mergeSort(izqMerge), mergeSort(derMerge));

}

function merge(izqMerge, derMerge){
  let arrSort = []
  //Chequeamos si los arrays no estan vacios
  while(izqMerge.length && derMerge.length) {
    if(izqMerge[0] <= derMerge[0]) {
      arrSort.push(izqMerge.shift())
    } else {
      arrSort.push(derMerge.shift())
    }
  }

  return [...arrSort, ...izqMerge, ...derMerge]
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
