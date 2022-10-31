function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2)) //passando a quantidade de parâmetros qua a function pede
console.log(area(2)) //passando menos parâmetros
console.log(area()) //passando nenhum parâmetro
console.log(area(2, 2, 6)) //passando mais parâmetros
console.log(area(5, 5))//entra na condição e imprime undefined pois não tem retorno nessa condição.