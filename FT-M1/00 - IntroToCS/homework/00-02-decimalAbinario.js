/*
* Crear una function que convierta un número de decimal a binario
*/

function DecimalABinario(num) {
  const bin = Number(num).toString(2)
  return bin
  
}

console.log(DecimalABinario(19))

/** OTRA OPCION **/

function DecimalABinario(num) {
  if (num <= 0) return '0'
  var binario = []
  while (num > 0) {
    binario.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  return binario.join('')
}
