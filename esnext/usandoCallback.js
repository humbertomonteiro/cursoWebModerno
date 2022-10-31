//sem promise...

/*modulo http que pertence ao node, que permite fazermos uma
requisição para obtermos os arquivos json*/
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    /*usamos o tipo get para termos uma resposta e nele passamos a url
    como parametro e uma callback que vai da a resposta. */
    http.get(url, res => {
        let resultado = ''

        /*on('data') evento que vamos usar para receber os
        dados que vão chegando*/
        res.on('data', dados => {
            resultado += dados
        })
        /*on('end') evento de termino da chegada de dados*/
        res.on('end', () => {
            callback(JSON.parse(resultado)) //convertendo para array os dados
        })
    })
}

let nomes = []

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})