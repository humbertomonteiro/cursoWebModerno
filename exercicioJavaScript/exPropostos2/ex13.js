function separaChaveValor(obj){
    return Object.entries(obj)
}

console.log(separaChaveValor(({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })))

console.log(separaChaveValor({
    codigo: 11111,
    preco: 12000
    }))