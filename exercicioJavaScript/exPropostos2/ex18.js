function media(params) {
    let qtdd = params.length
    const somaTotal = params.reduce((a, b) => a + b)
    return somaTotal / qtdd
}

console.log(media([0, 10]))
console.log(media([1, 2, 3, 4, 5]))