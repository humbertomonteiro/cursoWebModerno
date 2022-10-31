/*estrutura chave valor que aceita como chave qualquer tipo.
função, objetos, numeros... mas não pode ter chaves iguais, se 
for adicionada uma chave já existente, ela será sobescrita.*/ 

const tecnologias = new Map() //usando o Map
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

//console.log(tecnologias.react) //jeito errado de chamar
console.log(tecnologias.get('react')) //jeito certo
console.log(tecnologias.get('react').framework) //pode vê o valor aplicado

//adicionando tipos de chaves que são impossiveis em objetos
const chavesVariasdas = new Map([
    [function () {}, 'Funcão'],
    [{}, 'Objeto'],
    [123,'Número'],
])

chavesVariasdas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariasdas.has(123)) //função que diz se está ou não dentro do array
chavesVariasdas.delete(123)
console.log(chavesVariasdas.has(123))
console.log(chavesVariasdas.size) //diz quantos elementos tem no array

