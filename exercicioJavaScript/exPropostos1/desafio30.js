function maiorNumero(vetor2) {
    vetor2.sort((a, b) => a < b ? 1 : -1)
    return vetor2[0]
}
vetor2 = [ 78, 8, 50, 10, 11, 65, 16, 87, 18, 99, 20, 21]
console.log(maiorNumero(vetor2))