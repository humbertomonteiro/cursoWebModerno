function estaEntre(numero, minimo, maximo, inclisivo = false){
    if (inclisivo) return numero >= minimo && numero <= max
    return numero > minimo && numero < maximo
}

console.log(estaEntre(100, 100, 50))
console.log(estaEntre(120, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))