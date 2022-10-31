const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.99}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]
console.log(carrinho)

//Retornar um array com os nomes e os preços
const transformar = e => JSON.parse(e) //trnaformando JSON em array
const getPreco = e => e.preco //criando função para pegar a chave preco de um array.

const precos = carrinho.map(transformar).map(getPreco) //passando para o map as alterações
console.log(precos)