console.log(module.exports)

this.nome = 'Humberto'
console.log(module.exports)

exports.sobrenome = 'Monteiro'
console.log(module.exports)

module.exports.idade = 24
console.log(module.exports)



const apresentar = require('../moduloA')
console.log(apresentar.ola, apresentar.bemVindo, apresentar.ateLogo)

const saudacao = require('../moduloB')
console.log(saudacao.bomDia)
console.log(saudacao.boaNoit())



const _ = require('lodash')
setInterval(() => console.log(_.random(1, 10)), 2000)