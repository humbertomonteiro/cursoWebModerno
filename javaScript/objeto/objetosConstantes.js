//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'

/*
O que foi mudado foi o atributo do objeto e não o endereço 
da constante
*/

//Aqui ta querendo mudar o endereço da constante
//pessoa -> 456 -> {...}
//const pessoa = {nome: 'Maria'}

//Para congelarmos as atribuição em algum Objeto
Object.freeze(pessoa)

//nada será passado
pessoa.nome = 'Maria'
pessoa.endereco = 'rua 1 do lado da rua 2'
delete pessoa.nome

console.log(pessoa)

//Para construir um objeto imutavel
const pessoa2 = Object.freeze({nome: 'Carinha que mora logo ali', endereco: 'betstai'})
pessoa.nome = 'Perigo' //tentando mudar

console.log(pessoa2)