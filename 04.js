/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var numRev = num.toString().split('').reverse().join('');
  //console.log(num, numRev);
  if (num == numRev){
      return true;
  } else {
      return false;
  }
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico

/* 
// Solución de SoyHenry

function numeroSimetrico(num) {
  var numString = num.toStrin();
  var longitud = numString.length;

  for (var i = 0; i < Math.floor(longitud/2); i++ ){
    if(numString[i] !== numString[longitud - 1 -i]){
      return false;
    }
  }
  return true;
} */
