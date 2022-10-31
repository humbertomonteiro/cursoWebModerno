const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let menorQueSete = [] //criar um novo array
for(let i in notas) { //usar um for
    if (notas[i] < 7) { //condição desejada
        menorQueSete.push(notas[i]) //função push para adicionar algo em algum array
    }
}
console.log(menorQueSete)



//com callback e com filter
const notasBaixas = notas.filter(nota => nota < 7) //filter retorna quando sua condição é verdadeira

console.log(notasBaixas)

//diexando um pouco mais elegante
const reprovado = nota => nota < 7 //atribui a uma constante a função para fazer a condição, fazendo assim a função pode ser reutilizar a função em outros lugares.
const notasbaixas2 = notas.filter(reprovado) //agora so passar a função para a função filter

console.log(notasbaixas2)



//callback com forEat tentei usar o callback antes do professor falar qual seria a melhor opção
function menorSete2() {
    notas.forEach((a) => {
        if (a < 7)
        console.log(a)
    })
}
menorSete2(notas)

function menor9() {
    notas.forEach(a => {
        if (a < 9)
        console.log(a)
    })
}

menor9(notas)