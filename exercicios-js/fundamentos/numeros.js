const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //coloco quantas casas decimais quero exibir
console.log(media.toString(2)) //ex. de conversão de um numero em um numero binario
console.log(media.toString(16)) //ex. de conversão de um numero em um numero HexaDecimal
console.log(typeof media) //retorno o tipo
console.log(typeof Number) //retorno o tipo