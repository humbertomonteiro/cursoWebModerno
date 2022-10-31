function diaUtil(dia) {
    switch (dia) {
        case 1:
            console.log('Domingo')
            break
        case 7:
            console.log('Sábado')
            break
        case 6:
            console.log('Sexta')
            break
        case 5:
            console.log('Quinta')
            break
        case 4:
            console.log('Quarta')
            break
        case 3:
            console.log('Terça')
            break
        case 2:
            console.log('Segunda')
            break
        default:
            console.log('Data invalida')
    }
    return dia
}

diaUtil(4)
diaUtil(8)
