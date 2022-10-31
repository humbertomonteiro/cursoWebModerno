const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

//diferente do map o filter pode ser menor que o array filtrado

/*so será mostrado o que a logica da sua callback retornar 
verdadeiro, o que for falso será filtrado e descartado*/
console.log(produtos.filter(e => true)) //mostra todo o array
console.log(produtos.filter(e => false)) //mostra um array vazio

//pode ser feito logicas para serem filtrados
console.log(produtos.filter(e => e.preco > 1000))


//eu fazendo
console.log(produtos.filter(e => {
    if (e.preco > 500 && e.fragil === true) {
        return true
    }
}))

//prefessor fazendo (melhor forma.)

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))