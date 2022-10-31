function aumento(plano, atual) {
    switch (plano) {
        case 'A':
            console.log(`Seu salario atual é: ${atual + atual * 0.1}`)
            break
        case 'B':
            console.log(`Seu salario atual é: ${atual + atual * 0.15}`)
            break
        case 'C':
            console.log(`Seu salario atual é: ${atual + atual * 0.20}`)
            break
        default:
            console.log('Plano invalido! Digite (A, B ou C) para plano e seu salario ataul.')
    }
}
aumento('A', 1050)
aumento('B', 1900)
aumento('C', 1700)
aumento('D', 1000)