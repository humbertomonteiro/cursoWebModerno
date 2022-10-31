let pontosStrings = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function verificarPontos(pontosStrings) {
    let pontos = pontosStrings.split(", ")
    let recordes = 0
    let piorJogo = 1
    let menorPontuacao = pontos[0]
    let maiorPontuacao = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if(pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            recordes++
        } else if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            piorJogo = i + 1;
        }
    }
    return [recordes, piorJogo]
}

console.log(verificarPontos(pontosStrings))