function inverter(valor) {
    const tipo = typeof valor
    if (tipo == 'boolean') return !valor
    else if (tipo == 'number') return -valor
    else
        return `boolean ou número esperado, mas o valor é ${tipo}`
}
console.log(inverter(false))
console.log(inverter(2))
console.log(inverter(-62))
console.log(inverter(0))
console.log(inverter('Humberto'))
console.log(inverter('2'))
console.log(inverter(true))