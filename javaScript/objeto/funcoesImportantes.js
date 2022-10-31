const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pega as chaves do objeto
console.log(Object.values(pessoa)) //pega os valores do objeto

//entries serve para mostrar as chaves e os valores, cada um dentro de um array
console.log(Object.entries(pessoa))

//pode percorrer esse array com forEach
Object.entries(pessoa).forEach(e => console.log(`${e[0]}: ${e[1]}`))

//fazendo a mesma coisa, mas passando para a função operadores destructuring
Object.entries(pessoa).forEach(([chave, valor]) => console.log(`${chave}: ${valor}`))

/*
podemos criar propriedades com a função defineProperty, a diferança dela é 
que pode passar caracteristicas para essa propriedade
*/
Object.defineProperty(pessoa, 'dataNascimento', { //passa a propriedade entre ('')
    enumerable: false, /* essa caracteristica serve para informar se a propriedade vai 
    ser listada, ou seja vai ser possivel mostrar as keys, values ou coisas do tipo*/
    writable: false, //serve para informar se vai ser possivel ser alterada
    value: '01/01/2019' //passando o valor da propriedade.
})

pessoa.dataNascimento = '10/01/2020' //tentando alterar, mas a caracteristica passada não permite
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // não mostra as chaves porque a caracteristica passada foi de nao listada.
console.log(pessoa.dataNascimento) // ainda esta lá, só não é permitida ser listada.

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

const obj = Object.assign(dest, o1, o2)
//essa função vai concatenar no primeiro parâmetro passado os outros parâmentros.

/*como no o2 tem uma propriedade igual na de destino, quando for passada, a segunda 
irá sobrescrever a primeira.*/
console.log(obj)

Object.freeze(obj) //serve para congelar o objeto deixando ele inalteravel
obj.c = 1525 // tentando alterar

console.log(obj) //continua do mesmo jeito, sem alterações.