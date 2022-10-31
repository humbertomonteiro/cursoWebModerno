let vetor = [25, -52, 12, 7, 35, -15, -7, 27]

const filtro = a => a < 0
const denovo = vetor => vetor.filter(filtro)
console.log(denovo(vetor))