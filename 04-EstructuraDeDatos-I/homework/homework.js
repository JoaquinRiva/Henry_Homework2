'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n == 0){ //caso base: aca ponemos si es 0 que devuelva 1 ya que el factorial de 0 es 1.
		return 1; //retorno: aca retornamos el valor 1 en caso de que se saque el factorial de 0
	}
	return n * nFactorial (n-1);  //continuacion: si el numero no es 0 pasa por esta operacion para sacar el factorial
}


function nFibonacci(n) {
  if (n === 0){ //caso base: aca sabemos que 0 da 0 y que 1 da 1 asi que lo definimos
    return 0;
  } else if (n === 1){
    return 1;
  } else {  //aca llamamos la funcion padre para poder calcular fibonacci en numeros que no son el 0 o el 1
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
} 

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.queue = [];

  this.enqueue = function (value) {
    this.queue.push(value); //AGREGAMOS ELEMENTOS A LA COLA
  };

  this.dequeue = function () {
    return this.queue.shift(); //SACAMOS ELEMENTOS DE LA COLA
  };

  this.size = function () {
    return this.queue.length; //MEDIMOS EL LARGO DEL ARRAY
  };
}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
