function calculadora(valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            console.log(valor1 + valor2)
            break
        case '-':
            console.log(valor1 - valor2)
            break
        case '*':
            console.log(valor1 * valor2)
            break
        case '/':
            console.log(valor1 / valor2)
            break
        default:
            console.log('Operação invalida')
    }
}

calculadora(5, '+', 20)
calculadora(5, '-', 20)
calculadora(5, '*', 20)
calculadora(5, '/', 20)
calculadora(5, '%', 20)