function soma() { //mesmo não tendo parâmentros você pode passar parâmentos para function
    let soma = 0
    for(i in arguments) { //arguments é um array interno de uma function que tem todos os argumentos que foram passados
        soma += arguments[i] //esta recebendo uma atribuição aditiva
    }
    return soma
}

//pode ser passados quantos parâmetros quiser.

console.log(soma()) //nenhum parâmetro
console.log(soma(1)) // passando apenas um parâmetro
console.log(soma(1.1, 2.2, 3.3)) //passando três parâmetros
console.log(soma(1.1, 2.2, 'teste')) //aqui soma os números e concatena a string
console.log(soma('a', 'b', 'c')) //vai ser o valor soma, que foi atribuido 0 e ser concatenado com as strings passadas
