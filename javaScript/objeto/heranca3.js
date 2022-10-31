const pai = {nome: 'Pedro', corCabelo: 'preto'}

/*outra forma de informor ao interpretador que o
objeto tem um prototype é criar o objeto com essa
função e passar o protótipo como o primeiro parametro*/
const filha1 = Object.create(pai) //criando objeto com herança

filha1.nome = 'Andreia' //objeto normal que pose ser passado os atributos

//filha herdou as propriedades do pai
console.log(filha1.corCabelo)

//essa função tambem permite passar mais parametros com atributos configurados.
const filha2 = Object.create(pai, {
    nome: {value: 'Magda', writable: false, enumerable: true}
}) //atributo nome, informando se poderá ser reescrito ou enumerado

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

filha2.nome = 'Fernanda' //tentando mudar

console.log(Object.keys(filha1))
console.log(Object.values(filha2)) //não muda o nome pois a configuração do objeto create não permite.


// quando percorrer um objeto com o for ele mostrarar os atributos herdados
for(let key in filha2) {
    console.log(key)
}

//para mostrar qual atributo realmente tem no objeto usa essa função
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`Do proprio objeto criado: ${key}`) : console.log(`Por herança: ${key}`)
}