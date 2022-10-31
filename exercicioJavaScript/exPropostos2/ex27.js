function quantosDigitos(numeros, quantos) {
    return numeros.filter(numero => {
    const quantosDigi = String(numero).length
    return quantosDigi === quantos
    })
} 

console.log(quantosDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(quantosDigitos([5, 9, 1, 125, 11], 1))