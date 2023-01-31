'use strict'

function BinarioADecimal(num) {
	const bin = parseInt(num, 2)
	return bin
	//let numToArr = num.split('').reverse()
	//let suma = 0
	//for (let i = 0; i < numToArr.length; i++) {
	//	suma += numToArr[i] * Math.pow(2, i)
	//}
	//return suma
}

function DecimalABinario(num) {
	const dec = Number(num).toString(2)
	return dec
	//let binario = []
	//while (num >= 1) {
	//	binario.unshift(num % 2) // 1 --> binario [1]
	//
	//	num = Math.floor(num / 2)
	//}
	//return binario.join('')
}

module.exports = {
	BinarioADecimal,
	DecimalABinario,
}
