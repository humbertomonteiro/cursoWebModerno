const fabricantes = ['Mercedes', 'audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir) //para cada elemento do array o forEach vai passar a function imprimir
fabricantes.forEach(fabricante => console.log(fabricante))