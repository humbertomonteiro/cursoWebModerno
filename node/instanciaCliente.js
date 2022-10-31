const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

/*o node por padrão faz cash dos objetos retornados a partir 
de um require, como é uma unica instacia, tudo que fizer em 
uma instancia será feito na outra*/
contadorA.inc() //incrementando o contadorA uma vez
contadorA.inc() //incrementando o contadorA outra vez

// mostrando o contador A e o B tem o mesmo valor, por conta do cash
console.log(contadorA.valor, contadorB.valor) 

/*com a função factory será criado novos objetos e não sofre 
com o cash igual o primeiro exemplo*/
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)