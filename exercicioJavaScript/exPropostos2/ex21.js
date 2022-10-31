function sorteio(num) {
    const max = 10
    const min = 1
    const sorte = Math.floor(Math.random() * (max - min + 1) - 1)
    if (num === sorte) {
        return `Parabens! O número sorteado foi ${sorte}`
    } else {
        return `Que pena! O número sorteado foi ${sorte}`
    }
}

console.log(sorteio(2))