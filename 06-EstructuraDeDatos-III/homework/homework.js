'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
  //Valores a la izquierda
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

  // Valores a la derecha
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  //Ambas ramas tiene elementos CASO A
  if (this.right && this.left) return 1 + this.left.size() + this.right.size();

  // 1 Sola rama tiene elementos CASO B
  if (this.left && !this.right) return 1 + this.left.size();
  if (!this.left && this.right) return 1 + this.right.size();

  // Ambas ramas vacias
  if (!this.left && !this.right) return 1;
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;

  // Si no lo encuentro y es menor
  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }

  // Si no lo encuentro y es mayor
  if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

///                                                 fn print()
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  //  if( order === "preorder") {}
  //  if(order === "postorder") {}

  switch (order) {
    case "post-order": // izq - der - nodo
      // true && fn()  // if(true){fn()}
      this.left && this.left.depthFirstForEach(cb, order); // CORTO CIRCUITO
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;

    case "pre-order": //node - izq - der
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      break;

    default: //izq - nodo - der
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
      break;
  }
};

let imprimir = function (x) {
  console.log(x);
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, almacen = []) {
  cb(this.value);

  if (this.left) {
    almacen.push(this.left);
  }

  if (this.right) {
    almacen.push(this.right);
  }

  if (almacen.length > 0) {
    almacen.shift().breadthFirstForEach(cb, almacen);
  }
};

 
 
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
