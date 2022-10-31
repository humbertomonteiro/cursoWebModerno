function MeuObjeto() {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//objetos criados a partir de uma função tem o mesmo prototyope
console.log(obj1.__proto__ === obj2.__proto__)

/*o prototype de uma função contrutora é diferante do prototype
de um objeto. o de uma função é o da propria função .prototype.
No exemplo abaixo (MeuObjeto.prototype)*/
console.log(MeuObjeto.prototype === obj1.__proto__)

//a função criada tambem tem prototipo que é a Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype)

//e para terminar o protótipo de uma Function.prototype é Object.prototype
console.log(Function.prototype === Object.prototype)

//Podemos dar atributos para função
MeuObjeto.prototype.nome = 'Humberto'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

//chamar o metodo da função de um objeto criado
obj1.falar()

//pode sobreescrever os atributos.
obj2.nome = 'Breno'
obj2.falar()

//criando um objeto literal
const obj3 = {}

//passsando o prototype da função para ele.
obj3.__proto__ = MeuObjeto.prototype

//atribuindo um novo valor a nome
obj3.nome = 'Obj3'

//chamando metodo herdado da função
obj3.falar()