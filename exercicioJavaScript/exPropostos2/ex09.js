function quantosMais(numero) {
    resultado = ''
    for (let i = 0; i < numero; i++) {
        resultado += '+'
    }
    return resultado
}
console.log(quantosMais(3))
console.log(quantosMais(6))