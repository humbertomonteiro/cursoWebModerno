function tudoPar(array) {
    return array.filter((num, indice) => {
        const numPar = num % 2 === 0
        const indicePar = indice % 2 === 0
        return numPar && indicePar

    })
}

console.log(tudoPar([1, 2, 3, 4]))
console.log(tudoPar([10, 70, 22, 43]))