function salario(horas, valor) {
    let total = horas * valor 
    return `Salario é igual a R$ ${total}`
}

console.log(salario(150, 40.5))