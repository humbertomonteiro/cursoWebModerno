const fs = require('fs') //fire sistem (modulo previamente instalado)

const caminho = __dirname + '/arquivo.json'

//sincrono...
//fica travado até lê todo o arquivo, então não é intessante para códigos grandes
const conteudo = fs.readFileSync(caminho, 'utf-8') //informa tambem, o incode correto, nesse caso utf-8
console.log(conteudo)

//asincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//leitura de pasta usando o fire sistem
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})