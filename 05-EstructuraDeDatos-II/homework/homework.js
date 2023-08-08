'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this._length = 0//Locomotora
  this.head = null
}

function Node(value) {
  this.value = value//Vagones
  this.next = null
}

let miLista = new LinkedList()
console.log(miLista);

LinkedList.prototype.add = function (value) {
  let nodo = new Node(value)
  
  let current = this.head
  
  if(!current){
      this.head = nodo;
  } else {
      while (current.next){
          current = current.next 
  }
      current.next = nodo;
      
  }
   this._length++;
   
  };

  LinkedList.prototype.remove = function(value) {
    if (this._length === 0) {
      return null; // Si nuestra lista esta vacia devuelvo null
    }
  
    let removedValue;
    if (this._length === 1) {
      removedValue = this.head.value;
      this.head = null; //Si la lista tiene un solo nodo eliminamos la cabeza y devolvemos su valor
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      removedValue = current.next.value;
      current.next = null; //En caso contrario al primer y segundo if, recorrera toda la lista hasta el penultimo eliminando el ultimo y devolviendo la lista
    }
  
    this._length--;
    return removedValue;
  };


  LinkedList.prototype.search = function (value) {
    let current = this.head;
    while (current) {
      //verificamos si value es uina funcion con un typeof
      if (typeof value === "function") {
        // Si el parámetro es una función, evaluamos el nodo actual con la función
        if (value(current.value)) {
          return current.value;
        }
      } else {
        // Si el parámetro es un valor, comparamos el valor del nodo con el parámetro y si son iguales ya encontramos el valor
        if (current.value === value) {
          return current.value;
        }
      }
      current = current.next;
    }
    return null;
  };





/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35; //Determinamos cuantos "buckets" vamos a tener
  this.buckets = new Array(this.numBuckets);
  //Creamos el metodo hash que aceptará un valor llave y lo transformará en un índice.
  this.hash = function (key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i); //El charCodeAt() método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
    }
    return hashValue % this.numBuckets; //Módulo para evitar que se exceda del tamaño
  };
  this.isValidKey = function (key) {
    return typeof key === "string";
  };

  this.hash = function (key) {
    if (!this.isValidKey(key)) {
      throw new TypeError;
    }
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.numBuckets;
  };

  this.set = function (key, value) {
    if (!this.isValidKey(key)) {
      throw new TypeError;
    }
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    // Buscamos si la clave ya existe en el bucket
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        // Si la clave ya existe, sobrescribimos el valor
        bucket[i].value = value;
        return;
      }
    }
    // Si la clave no existe, agregamos el nuevo par clave-valor
    bucket.push({ key, value });
  };

  this.get = function (key) {
    if (!this.isValidKey(key)) {
      throw new TypeError;
    }
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return undefined;
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
    }
    return undefined;
  };

  this.hasKey = function (key) {
    if (!this.isValidKey(key)) {
      throw new TypeError;
    }
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return true;
      }
    }
    return false;
  };


}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
