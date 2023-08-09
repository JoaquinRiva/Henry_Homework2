'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1];

  let divisor = 2;

  while (num !== 1) {
    if (num % divisor === 0) {
      factores.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [ 8  ,  7 ,  5 ,  2  , 11]
  //  i  > i+1

  // si es mayor intercambio
  // Recorro los punteros
  // generar un marcador que  que incialmente sea true
  // let swap = true ====> si llego ha hacer un cambio lo modifio a true
  // mientras que swap sea true tengo que seguir haciendo el ordenamiento
  // 2 for  o 1 while
  let cambio = true;

  while (cambio) {
    cambio = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i]; // 7
        array[i] = array[i + 1];
        array[i + 1] = aux;
        cambio = true;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //
  //   ☠️   [ 1 , 3 , 5 , 6 , 8 ,  2  ,11]
  //                      i
  //          j
  // segundo elemento  j = i+1
  // cajita = 3

  // comparo con el anterior i
  // lo invierto (ojo aqui utiolizar un auxiliar para no perder el valor)
  // while

  for (let i = 1; i < array.length; i++) {
    let aux = array[i]; // cajita = array[i]
    let j = i - 1;

    while (j >= 0 && aux < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //  [6 ,  3 ,  4 ,  5  ,  8  ,  1,  7  , 11]
  //   i
  //        j
  // min < j

  // si termine de recorrer el array coloco el valor min en la posicion de i
  // recorro ambos marcadores
  // ocupen 2 for
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
