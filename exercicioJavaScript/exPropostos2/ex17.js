function somaTudo(obj) {
    return obj.reduce((a, b) => a.preco + b.preco)
}

console.log(somaTudo([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))

    
    
console.log(somaTudo([
        {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
        {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
        ]))