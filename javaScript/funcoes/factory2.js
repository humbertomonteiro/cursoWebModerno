function criarProd(nome, preco) {
    return {
        nome, //como os parâmetros tem o mesmo nome, não precisa fazer dessa forma: 'nome: nome'
        preco,
        desconto: 0.1 //pode ser passado como um valor padrão nos parâmetros da função, assim não seria obrigado a passar o valor do desconto.
    }
}

console.log(criarProd('geladeira', 2500))
console.log(criarProd('fogão', 1200))
console.log(criarProd('sofá', 3000))