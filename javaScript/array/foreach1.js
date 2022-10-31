const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

/*dentro do forEach tem o laço for que vai percorrer o array, 
com uma função callback o foreach tem três parametros disponiveis:
o primeiro parâmetro passado será o elemento, o segundo o indice 
e por ultimo o proprio array*/ 

//se for adicionado uma quarto parametro será undefined

/*se for informado apenas um ou nenhum parametro vai ser passado 
apenas o elemento.*/
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)