//function declaration

/*
função declarada e nomeada. A diferênça principal é que ela 
pode ser chamada no código até mesmo antes de ser declarada, pois 
o interpretador primeiro carrega esse tipo de função e depois 
que lê o restante do código.
*/

function soma(x, y) {
    return x + y
}
console.log(soma(2, 6))

//function expression

/*
função anônima passada para uma constante ou variavel. A principal
diferança dessa função é que ela pode ser chamada em toda sua aplicação.
*/

const sub = function(x, y) {
    return x - y
}
console.log(sub(14, 8))

//named function expression

/*
a única diferença desse tipo de função é quando estiver debugando
o código vai ser mostrado o nome da função e será mais fácil
encontrar qualquer erro.
*/

const mult = function mult(x, y) {
    return x * y
}
console.log(mult(5,7))
