//função que recebe dois parâmetros

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

/*
como o preço e o desconto estão no escopo global, e no escopo 
global os mesmos não estão declarados, para poder chamar a função
diratamente temos que atribuir o preco e o desc no escopo global.
*/

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //chamando a função diretamente

/*
já aqui sendo adicionado o metodo getPreco ao objeto criado basta 
chamar com 'chave . valor' que dará certo.
*/

const produto = { //obj criado
    nome: 'Notebook',
    preco: 4589, //passando preco
    desc: 0.15, //passando desc
    getPreco
}
console.log(produto.getPreco()) //chamando a função a partir de um objeto

const carro = {preco: 49990, desc:0.20} //obj criado

console.log(getPreco.call(carro)) //chamando a partir do call
console.log(getPreco.apply(carro)) //chamando a partir do apply

//a diferença entre call e apply é como os parâmetros são passados

console.log(getPreco.call(carro, 0.17, '$')) //aqui como parâmetros normais

console.log(getPreco.apply(global, [0.17, '$'])) //aqui como array