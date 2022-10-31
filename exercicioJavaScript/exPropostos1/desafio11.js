function bisexto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }

}

console.log(bisexto(0))
console.log(bisexto(4))
console.log(bisexto(100))
console.log(bisexto(400))
console.log(bisexto(2022))