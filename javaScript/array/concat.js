const filhas = ['Ualeska', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
const todos = filhas.concat(filhos)

/*é criado um novo array concatenando o qu foi passado de 
parametro para o concat*/
console.log(todos, filhas, filhos)

//pode ser concatenados dessa forma tambem
const todosMaisUm = filhas.concat(filhos, 'Fulanos')
console.log(todosMaisUm)

//tambem da pra fazer assim
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))