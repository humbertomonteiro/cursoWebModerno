//criando objeto para transformar em JSON
const obj = {a: 1, b: 2, c: 3, soma () {return a + b + c}}

//JSON não lê funções
console.log(JSON.stringify(obj)) //metodo JSON.stringify serve para transformar em JSON

//criando JSON para trnasformar em Objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

//atenção
/*para ser um formato valido tem que começar com aspas simples
depois abre e feixa chaves, então a chave do atributo tem que
ta com aspas duplas. Se o valor for numerico, booleano, um objeto
ou um array, não precisa colocar aspas, mas se for string precisa
e tem que ser as aspas duplas. */
