function gerarNumeroAleatorio(max, min, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarAriosNumeros() {
    return Promise.all([
        gerarNumeroAleatorio(1 ,60, 4000), 
        gerarNumeroAleatorio(1 ,60, 1000), 
        gerarNumeroAleatorio(1 ,60, 500), 
        gerarNumeroAleatorio(1 ,60, 3000), 
        gerarNumeroAleatorio(1 ,60, 100), 
        gerarNumeroAleatorio(1 ,60, 1500) 

    ])
}

gerarAriosNumeros()
    .then(console.log)