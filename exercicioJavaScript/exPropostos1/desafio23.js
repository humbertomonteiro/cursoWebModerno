function medias(aluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1) //function sort serve para ordenar arrays

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3 ) / 10
    console.log(`${aluno} notas: ${nota1}, ${nota2} e ${nota3}. Sua média foi: ${mediaFinal}`)
}

medias('Humberto', 10, 5, 8)