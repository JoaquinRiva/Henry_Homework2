'use strict';

function BinarioADecimal(num) {
   let suma = 0;

   for(let i = 0; i < num.length; i++){
      suma += +num[i] * 2 ** (num.length - 1 - i);
   }
   return suma;
}

function DecimalABinario(num) {
   let stringBinario = "";
   function DecimalABinarioHelper(num) {
      if (num < 2) {
         stringBinario += num;
         return; 
      }
      else {
         DecimalABinarioHelper(Math.floor(num / 2));
         DecimalABinarioHelper(num % 2);
      }
   }
   DecimalABinarioHelper(num);
   return stringBinario;
   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
