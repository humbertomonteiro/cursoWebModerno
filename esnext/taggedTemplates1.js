// tagged tamplates - processar o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Guri'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`)