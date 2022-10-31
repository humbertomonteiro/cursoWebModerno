function triangulo(a, b, c) {
    if (a === b && a === c) {
        console.log('Triângulo Equilátero')
    } else if (a !== b && a !==c ) {
        console.log(('Triãngulo Escaleno'))
    } else {
        console.log('Triangulo Isósceles')
    }
}

triangulo(2, 2, 2)
triangulo(2, 2, 3)
triangulo(2, 4, 7)
