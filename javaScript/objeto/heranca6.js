function Aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

//simulando o new
//parametro '...' recebe varios parametro e concatena num array
function novo(funcaoconstrutora, ...params) { //passa a função construtora
    const obj = {} //faz um obj literal
    obj.__proto__ = funcaoconstrutora.prototype //aponta o objeto litaral para o prototype da funcao construtora
    funcaoconstrutora.apply(obj, params) //pega a função passada para o objeto literal e os parametros dessa função no formato de array
    return obj //ai sim retorna o objeto criado
}

const aula3 = novo(Aula,'bem vindo', 123)
const aula4 = novo(Aula,'Ate breve', 456)

console.log(aula3, aula4)