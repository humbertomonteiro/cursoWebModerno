function soma(array) {
    const somando = array.reduce((a, b) => a + b)
    return somando
}
console.log(soma([1, 2, 5, 2]))