function quantasDelasTem(letra, frase) {
    return [...frase].filter(buscaLetra => buscaLetra === letra).length
}

console.log(quantasDelasTem("r", "A sorte favorece os audazes"))
console.log(quantasDelasTem("c", "Conhece-te a ti mesmo"))