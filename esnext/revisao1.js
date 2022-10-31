//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto}`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const [z, , t] = [1, 2, 3]
console.log(z, t)

const {prod, preco} = {prod: 'celular', preco: 1234}
console.log(prod, preco)

/*renomeando atributos de um objeto*/ 
const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)