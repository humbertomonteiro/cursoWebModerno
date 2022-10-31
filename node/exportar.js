console.log(module.exports) //é um obj vazio, que representa o modulo 
console.log(module.exports === this) //referencia de memoria para para o module.export
console.log(module.exports == exports) //essa tembem é uma referencia para o module.export

/*podemos atribuir chaves e valores com essas eferencias de 
memoria*/
this.a = 1
exports.b = 2
module.exports.c = 3

/*o module.exports é o único que será retornado nos arquivos que 
importam o que está publico no modulo, então mesmo 
que tente alterar o valor do modulo com o this ou com 
o exports não será possivel e dará erro.*/

exports = null //tentando passar o valor null para o modulo com o exports
console.log(module.exports) //não foi passado.

exports = {
    nome:'Humberto'
} // tentando atribuir um novo obj com o exports
console.log(module.exports) ////tambem não foi atribuido

/*na pasta exportarCliente verá que mesmo tendo atribuido
outros valores no exports, o que será chamado é o que tem no
module.exports(referencia objetiva do modulo)*/

//então a forma correta de alterar o objeto é a seguinte:
module.exports = {publico: true}