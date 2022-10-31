function aleatorio(min, max) {
    const sorteio = Math.random() * (max - min) + min
    return Math.floor(sorteio)
}

let opcao // somente iniciada a variável, sem valor inicial.

do {
    opcao = aleatorio(-1, 10)
    console.log(`O número foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima.')