const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break //se não colocar o break o switch não vai parar.
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperação')
            break
        case 4: case 3:
            console.log('Reprovado')
            break
        default: // pode ficar em qualquer posição, mas com o break
            console.log('Nota inválida')
    }
}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(-1)
imprimirResultado(11)