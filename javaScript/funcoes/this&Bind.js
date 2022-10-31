//this é o objeto que está sendo referênciado. O this pode variar.

const pessoa = {
    saudacao :'Bom dia',
    falar() { // mudaças do ES 2015 antes teria que criar assim: falar: function falar() {}, agora esta bem mais redizido.
        console.log(this.saudacao) // o this serve para mostrar para o interpretador onde esta localizado o parâmetro 
    } // se retirar o this o saudacao seria undefined pois saudacao tem o obj pessoa como contexto.
}

pessoa.falar()
const falar = pessoa.falar //armazenando uma função numa constante o contexto dela muda para o da propria constate.
falar() //chamar a função armazenada será undefined, pois o contexto do this será diferente.

const falarsaudacao = pessoa.falar.bind(pessoa) //pode resolver usando a função bind para informar o contexto
falarsaudacao()