const vetor2 = [5, 6.5, 4.6, 9.5, 8.5, 7, 6.8, 2.8, 4.9]

let soma = 0
for (i in vetor2) {
    soma += vetor2[i]
}
let media = soma / vetor2.length
console.log(media)
