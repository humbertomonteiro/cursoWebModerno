//function anônima

let dobro = function (a) {
    return 2 * a
}

console.log(dobro(2))

//function arrow

let dobro2 = (a) => 2 * a //se for apenas uma unica linha de código você não precisa passar o bloco nem o retorno

console.log(dobro2(5))

let dobro3 = a => 2 * a //com apenas um parâmetro não precisa colocar entre parêntesis

console.log(dobro3(8))

let ola = () => 'Olá' //não precisa passar parâmetro nenhum caso não precise

console.log(ola())

let tudoBem = _ => 'Tudo bem?' //se for apenas um parâmetro pode usar o _

console.log(tudoBem())