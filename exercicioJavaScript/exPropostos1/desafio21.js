function planoSaude(quant, idade) {
    if (idade < 10) {
        console.log(180 * quant)
    } else if (idade < 30) {
        console.log(150 * quant)
    } else if (idade < 60) {
        console.log(195 * quant)
    } else if (idade >= 60) {
        console.log(230 * quant)
    } else {
        console.log('Dados invalidos')
    }
}

planoSaude(2, 5)
planoSaude(3, 15)
planoSaude(4, 32)
planoSaude(2, 50)
planoSaude(4, 61)