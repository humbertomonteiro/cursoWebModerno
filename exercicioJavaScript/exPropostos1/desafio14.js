function vendeOuNao(fruta) {
    switch(fruta) {
        case 'maça':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de Kiwis')
            break
        case 'melancia':
            console.log('Aqui está! São 3 reais o kg')
            break
        default:
            console.log('escolha uma fruta valida(maça, kiwi ou melancia')
    }
}
vendeOuNao('maça')
vendeOuNao('kiwi')
vendeOuNao('melancia')
vendeOuNao('pera')