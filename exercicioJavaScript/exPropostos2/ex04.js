function maiorIgual(num1, num2) {
    if(typeof num1 != typeof num2) return false
    return num1 >= num2
}

console.log(maiorIgual(3, 6))
console.log(maiorIgual(0, '0'))
console.log(maiorIgual(5, 1))