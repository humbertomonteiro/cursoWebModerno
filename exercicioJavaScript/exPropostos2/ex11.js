function deletarPropriedade (obj, remove) {
    const copia = Object.assign({}, obj)
    delete copia[remove]

    return copia
}

console.log(deletarPropriedade({a: 1, b: 2}, "a"))
console.log(deletarPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"))