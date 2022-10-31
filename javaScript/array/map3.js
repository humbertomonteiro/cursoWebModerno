Array.prototype.map2 = function(callback) {
    const arrayNovo = []
    for (let i = 0; i < this.length; i++){
        arrayNovo.push(callback(this[i], i, this))
    }
    return arrayNovo
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.99}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]

//Retornar um array com os preços

const transformar = e => JSON.parse(e)
const getPreco = e => e.preco

const precos = carrinho.map2(transformar).map2(getPreco)
console.log(precos)