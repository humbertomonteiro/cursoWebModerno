const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//Mostrar valores
console.log(valores[4])//Não mostra se não tiver a posisão

valores[4] = 10//Adiciona valores
console.log(valores)
console.log(valores.length)//Mostra quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')//Aceita varios tipos, mas não é recomendado
console.log(valores)

console.log(valores.pop())//Tira um array
delete valores[0]//Retira da lista algum
console.log(valores)

console.log(typeof valores)//Um array é um objeto