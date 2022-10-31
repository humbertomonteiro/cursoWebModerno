let vetor = [2, 4, 6, 8, 3, 10]

function multiplicador(vetor, numero) {
    let mult = []
    vetor.forEach(a => {
        mult.push(a * numero)
    })
    return mult
}
console.log(multiplicador(vetor, 2))

function multMaiorDe5(vetor, num) {
    mult2 = []
    vetor.filter(a => { 
        if (a > 5) {
            mult2.push(a * num)
        }
    })
    return mult2
}

console.log(multMaiorDe5(vetor, 3))