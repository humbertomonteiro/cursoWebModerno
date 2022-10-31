function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.2)
    .then(v => console.log(`Valo: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))