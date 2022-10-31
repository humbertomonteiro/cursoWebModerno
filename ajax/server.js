const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//multer serve para interpretar o formulario que veio do upload
const multer = require('multer')

/*dentro do multer tem uma função diskStorage que tem um objeto que serve para configurar 
tanto a pasta onde sera salvo os arquivos quanto o nome do arquivo quando for salvo*/
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        //o segundo parametro da callback recebe a pasta
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        //o segundo parametro da callback recebe o nome do arquivo quando estiver na pasta.
        callback(null, `${Date.now()}_${file.originalname}`) //nesse caso recebera a data com milisegundos, mais o nome orinal
    }
})

/*então criamos uma função para receber o multer com o objeto que criamos e passamos o single para informar 
o name do input que vamos receber.*/
const upload = multer({ storage }).single('arquivo')

/*agora usando o express com a requisição post que receberá a pasta para upload como primeiro parametro e 
como segundo parametro uma função middler que vamos usar a função upload que configuramos com a biblioteca
multer*/
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }
        
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'Par' : 'Impar'
    })
})

app.listen(8080, () => console.log('Executando...'))