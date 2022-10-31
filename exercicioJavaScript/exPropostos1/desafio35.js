let pilha = [1, 2, 3, 4, 5]
let adicional = [6, 7, 8, 9, 10]

function juntando(inicial, adicional) {
    for(let i = 0; i < adicional.length; i++) {
        inicial.push(adicional[i])
    }
    console.log(`O valor adicional ${adicional}`)
    console.log(`Vetor resultado ${inicial}`)
}

juntando(pilha, adicional)