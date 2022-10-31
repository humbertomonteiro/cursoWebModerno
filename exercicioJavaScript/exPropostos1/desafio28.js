function paresEImpares(numeros) {
    let par = 0
    let impar = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`No vetor tem ${par} numeros pares e ${impar} numeros impares`)

}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresEImpares(vetor)