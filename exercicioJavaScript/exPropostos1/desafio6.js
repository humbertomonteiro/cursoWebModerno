function simples(capInicial, txJuros, tempoAplicado) {
    console.log(capInicial * txJuros * tempoAplicado)
}
simples(100, 10/100, 2)

function composto(capInicial, txJuros, tempoAplicado) {
    console.log(capInicial * (1 + txJuros) * tempoAplicado)
}
composto(100, 10/100, 30)