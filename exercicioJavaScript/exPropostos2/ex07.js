function somarParaMultplicar(num1, num2) {
    resultado = 0
    for(let i = 0; i <= num1; i++) {
        resultado += num2
    }
    return resultado
}

console.log(somarParaMultplicar(5, 6))