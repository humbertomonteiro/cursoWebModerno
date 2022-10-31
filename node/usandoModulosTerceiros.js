/*usar modulos de terceiros é muito fácil, aqui vamos baixar
uma biblioteca para usarmos de exemplo*/
//instalado o lodash vamos usar ele aqui.

 //geralmente é refernciado a biblioteca lodash com o _
const _ = require('lodash')

/*não precisa usar o ./ para informar que é o caminho
relativo, pois tem a pasta index que será buscado no 
node_modules e será iniciada.*/

setInterval(() => console.log(_.random(5, 10)), 2000)