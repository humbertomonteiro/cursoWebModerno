const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') //adiciona no ultimo elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro elemento
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

/*faz um novo array a partir do primeiro elemento do metodo 
slice*/
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

/*passando dois elementos para o metodo, vai ser criado um 
novo array a partir do primeiro elemento e até um elemento 
antes do segundo passado para o metodo.*/
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)