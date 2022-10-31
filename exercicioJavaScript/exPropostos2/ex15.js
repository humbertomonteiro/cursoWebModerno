function bisexto(ano) {
    const m4 = ano % 4 == 0 
    const m100 = ano % 100 == 0
    const m400 = ano % 400 == 0

    return (m4 && !m100) || m400
}

console.log(bisexto(2020))