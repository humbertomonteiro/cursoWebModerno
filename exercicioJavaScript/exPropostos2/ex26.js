function trocandoTudo(obj) {
    const chaveValor = Object.entries(obj).map(chaveValor => chaveValor.reverse())
    return Object.fromEntries(chaveValor)
}

console.log(trocandoTudo({ a: 1, b: 2, c: 3}))