/*para importar modulos usamos o require() 
dentro dos parentesis usamos aspas e quando
formos importar precisamos colocar
o ./ para acessar o modulo desejado*/
// O ./ mostra a propria pasta onde esta inserido o arquivo
// O ../ sai da pasta atual
// O ../../ sai de duas pastas e assim sucessivamente 

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

/*para chamar usamos as variaveis ou constantes
onde armazenamos os modulos importados e chamamos 
o atributo normalmente.*/

console.log(moduloA.ola) 
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoit())
console.log(moduloB)