function soma1(a,  b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) //sem passar nenhum parâmetro vai assumir o valor que atribuimos como padrão
console.log(soma1(3))  // a mesma coisa acontece se passar apenas um ou dois parâmetros
console.log(soma1(0, 0, 0)) //O problema dessa forma de deixar os parâmetros é quando passamos o valor 0 e ele passa como false e o valor padrão será 1

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se for undefined será passado 1
    b = 1 in arguments ? b : 1 // se não existir o argumanto de indice 1 do array da function ser´´a passado 1
    c = isNaN(c) ? 1 : c // se não for um numero retorna o valor padrão
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(0, 0, 0)) //resolve o problema do 0


//ES 2015 já passa o valor padrão dentro do array da function

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(0, 0, 0))