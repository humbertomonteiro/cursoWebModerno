const porta = 3003
const express = require('express') //importando express para fazer as requisições
const app = express() //instanciando o express
const bodyParser = require('body-parser') //importando body-parser
const bancoDeDados = require('./bancoDeDados') //importando modolo criado na pasta srs do projeto

//usando a função use para que todas as requisições passem por ela com o extended true para evitar 
app.use(bodyParser.urlencoded({ extended: true }))

//requisição get para pegar os produtos do banco de dados
app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executnado na porta ${porta}.`)
})