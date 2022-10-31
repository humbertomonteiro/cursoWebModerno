const prod1 = {
    nome: 'manga',
    preco: 2.50,
}

const prod2 = {
    nome: 'abacaxi',
    preco: 4.50,
}

/*
para não precisar ficar criando objetos literais de 
forma manual, usamos uma function factory. É uma função
que retorna objetos.
*/

function criarProd() {
    return {
        nome: 'acerola',
        valor: 1.8
    }
}
console.log(criarProd())