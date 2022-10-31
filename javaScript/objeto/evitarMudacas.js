//Object.preventExtensions não permite colocar mais atributos.
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 123, tag: 'promoção'
})

//informa se é ou não extensivel(se pode acrescentar atributos)
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' //permite mudar valores
produto.descricao = 'Borracha escolar branca' //não permite novos atributos
delete produto.tag //pode apagar atributos

console.log(produto)

//Object.seal não permite colocar nem apagar atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa)) //verifica se estar selada

pessoa.sobrenome = 'Silva' //não permite novos atributos
delete pessoa.nome //não permite apagar atributos
pessoa.idade = 29 //permite mudar valores
console.log(pessoa)

//Object.freeze = selado + valores constantes

