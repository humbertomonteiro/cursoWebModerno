function conprarCarro(tipo) {
    switch (tipo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}
conprarCarro('hatch')
conprarCarro('sedans')
conprarCarro('motocicletas')
conprarCarro('caminhonetes')
conprarCarro('eletricos')