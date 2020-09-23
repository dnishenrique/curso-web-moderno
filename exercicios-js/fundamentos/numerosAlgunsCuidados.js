console.log(7 / 0) //é um numero infinito
console.log(7 / 0.0001) //é um numero bem grande, quanto mais vocês se aproxima de um valor zero o valor dividido vai aumentando

//tomar cuidado com os dados internos que não estou usando como numero
console.log("10"/2) //ele executa a divisão
console.log("10.5"/2) //ele executa a divisão
console.log("10,5"/2) //ele não executa a divisão pois não consegue fazer a converção

console.log("Show!" * 2) //ele não executa a palavra Show duas vezes
console.log(0.1 + 0.7) //ele não retorna 0.8

/* console.log(10.toString()) //você não consegue executar dessa maneira */
console.log((10.5826).toFixed(2)) //usando o () você consegue usar o .toFixed e etc..