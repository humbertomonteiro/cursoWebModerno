function porTres(numero) {

    let dividido = numero / 3
    let splitado = dividido.toString().split('')
    //console.log(splitado)
    if (splitado.indexOf('.') === -1) {
        console.log(true)
    } else {
        console.log(false)
    }
}

porTres(4)