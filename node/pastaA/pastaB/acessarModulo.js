//para sair de uma pasta usa ../ para sair de duas ../../ assim sucessivamente.

/*é importante se atentar como foi escrito para não gerar 
problemas na hora de chamar no require*/

const moduloA = require('../../moduloA')
console.log(moduloA.ola)


/*
pode ser chamado facilmente na pasta node_modules, passando
apenas o nome da pasta, que o node irá buscar pelo arquivo 
index dessa pasta. Será chamado só com o nome da pasta
sem nescecidade de usar o caminho relativo ./ ou ../
*/

//normalmento usamos bibliotecas ou
//const saudacao = require('saudacao')
//console.log(saudacao.ola)
//obs: não irá funcionar o código acima, pois apaguei o node_modules da pasta node

/*caso seja uma pasta fora do node_modules, mas tiver um arquivo index
ness pasta, não será necessario escrever o nome arquivo, apenas a pasta,
mas o arquivo precisará usar o caminho relativo normalmente.*/
const c = require('./pastaC')
console.log(c.ola2)

/*tambem pode importar os modulos que ja veem no node
que são os modulos cora*/

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/