function removeVogais(palavras) {
    return palavras.replace(/[aeiou]/ig, '')
}

console.log(removeVogais('cod3r'))
console.log(removeVogais('fundamentos'))