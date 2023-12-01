/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca

  var sortedArray = strings.sort((x,y) => x.length - y.length)
  var l = sortedArray.length
  return sortedArray[l-1]
}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga

/*

solución video SoyHenry

function stringMasLarga(strings){
  var masLarga = strings[0];
  for (var i = 1; i < strings.length; i++){
    if (masLarga.length <= strins[i].length){
      masLarga = strings[i]
    }
    return masLarga;

  }
}*/