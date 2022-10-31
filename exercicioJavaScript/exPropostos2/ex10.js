function preiEUlti(array) {
    let arrayNovo = []
    arrayNovo.push(array[0], array[array.length - 1])
    return arrayNovo
}

console.log(preiEUlti([7, 14, 'Olá']))
console.log(preiEUlti([-100, "aplicativo", 16]))
