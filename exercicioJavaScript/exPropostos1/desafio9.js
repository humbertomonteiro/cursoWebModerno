function passouOuNao(nota) {
    if (nota >= 38) {
        console.log(`Parabésn você passou, sua nota foi ${nota}`)
    } else {
        console.log(`Recuperação, sua nota foi ${nota}`)
    }
}

passouOuNao(34)