const inteiro = [1, 2, 3, 4]
const texto = ['a', 'b', 'c', 'd']
const decimal = [0.4, 4.5, 1.9, 6.4]

function vetores(...args) {
    let vv = []
    for(let i = 0; i < arguments.length; i++) {
        vv = vv.concat(arguments[i])
    }
    return vv
}
console.log(vetores(inteiro, decimal))
console.log(vetores(texto, decimal))