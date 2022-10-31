const soma = function(x, y) {
    return x + y
} // função anônima é uma função sem nome, armazenada numa variavel ou em uma constante.

const imprimirResultado = function(a, b, operacao = soma) { //podemos colocar como parâmetro padrão uma função.
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) //passando apenas dois parâmetros operação será a function soma
imprimirResultado(5, 8, soma) //passando justamente a função que está como padrão
imprimirResultado(3, 4, function(x, y){
    return x - y
}) //passando o terceiro parâmetro com uma fuction anônima de multiplas linhas também é possivel

imprimirResultado(6, 4, (a, b) => a * b) //com a função arrow fica bem mais enxuto o código

//podemos usar funções anônimas para objetos tambem

const obj = {
    falar: function() {
        console.log('Hello')
    }
}

obj.falar()