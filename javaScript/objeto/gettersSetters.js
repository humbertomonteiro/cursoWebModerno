const sequencia = {
    _valor: 1, // É uma convenção para ser uma variavel que é pretendida ser mexida apenas internamente.
    get valor() { return this._valor++}, //acrescenta 1 ao valor
    set valor(valor) { 
        if(valor > this._valor ) { //condição para informar o valor maior se ele foi aumentado.
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não atribui por causa da função set
console.log(sequencia.valor, sequencia.valor)