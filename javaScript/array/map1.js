const nuns = [1, 2, 3, 4, 5]

//for com propósito
//pode receber três parametros: valor, indice e array completo
//importante: não altera o array atual, ele retorna um novo array
/*diferente do forEach o map cria um novo array com o array passado.
Podendo alterar seus elementos de qualquer forma. Com uma condição 
de ser com a mesma quantidade de elementos do array passad ao metodo.*/

let resultado = nuns.map(e => e * 2)
console.log(resultado)

const soma10 = e => e + 10 //pode somar
const triplo = e => e * 3 //multiplicar
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //colocar strings, casas decimais e alterar caracteres

resultado = nuns.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)