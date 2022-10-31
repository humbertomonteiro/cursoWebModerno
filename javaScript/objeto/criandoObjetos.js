// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produtos(nome, preco, desc) {
    this.nome = nome //com o this a variavel fica sucetivel a mudança fora da função.
    this.getDescontado = _ => preco * (1 - desc)
}

const p1 = new Produtos('caneta', 2.5, 0.2)
const p2 = new Produtos('caderno', 15, 0.1)

console.log(p1.getDescontado(), p2.getDescontado())

p1.nome = 'canetona' //Dá pra mudar pois o nome ficou publico
console.log(p1)

p1.preco = 3 //Já o preço não ficou.
console.log(p1.getDescontado()) //então mesmo depois de tentar mudar, o valor sera o dado por parametro.

// Função Factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30 ) * ( 30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 1700, 3)
const f2 = criarFuncionario('Maria', 1900, 1)

console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)