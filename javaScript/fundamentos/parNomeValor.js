const saudacao = 'Opa' // Contexto léxico

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico
    return saudacao
}

// Objetos são grupos aninhado de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
