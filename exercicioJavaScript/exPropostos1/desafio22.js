function pagarAssociacao(mes, valor) {
    if (mes > 1 && mes < 13){
        let atraso = mes - 1
        return valor * ((1 + (5 / 100))**atraso )
    } else {
        return 'Valor invalido'
    }
    
}

console.log(pagarAssociacao(4, 100))
