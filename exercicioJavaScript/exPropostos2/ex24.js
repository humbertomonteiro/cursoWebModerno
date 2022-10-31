function buscar(palavra, existentes) {
    return existentes.filter(existentes => existentes.includes(palavra))
}

console.log(buscar("pro", ["programação", "mobile", "profissional"]) )
console.log(buscar("java", ["javascript", "java", "c++"]))