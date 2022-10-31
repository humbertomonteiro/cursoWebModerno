//coleção dinâmica de pares chave/valor

//criando objeto a partir do operador 'new' instanciando a função Object
const produto = new Object 

//Para adicionar atributos para objetos tem duas formas
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //pode da qualquer nome para o atributo
produto.preco = 220

console.log(produto) //mostra o objeto com todos seus atributos
console.log(produto.preco) //mostra atributos especificos

//Para deletar atributos
delete produto.preco
delete produto['marca do produto']

console.log(produto)

//criando objeto literal, abrindo chaves e dando os atributos separados por ','.
const carro = {
    modelo: 'A4',
    valor: 89000,
    //objeto com atributos proprios dentro do objeto
    proprietario: {
        nome: 'Diego',
        idade: 27,
        //objeto dentro do objeto que ta dentro do objeto (aninhando objetos)
        endereco: {
            logradouro: 'Rua um',
            numero: 123
        }
    }, //segundo objeto do primeiro objeto
    //objetos com arrays de objetos
    condutores: [{
        nome: 'Breno',
        idade: 23
    }, {
        nome: 'Humberto',
        idade: 25
    }],
    //pode adicionar funções para objetos(que se chamam metodos)
    calcularSeguro: function() {}
}

//podemos mudar seus atributos a partir da anotação ponto '.'
carro.proprietario.endereco.numero = 2580 

//ou com []
carro['proprietario']['endereco']['logradouro'] = 'Mateus Lemos'

console.log(carro)

//pode mostrar quantos atributos tem no objeto com o length
console.log(carro.condutores.length)

//Pode deletar o que quiser do seu objeto
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro

console.log(carro)

//cuidado em acessar atributos deletados pois será undefined
console.log(carro.condutores)

//se tentar acessar atributos de atributos deletados dará erro
//console.log(carro.condutores.nome)