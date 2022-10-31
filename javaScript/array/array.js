console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) //começa a partir do zero
console.log(aprovados[1]) 
console.log(aprovados[2]) 
console.log(aprovados[3]) //retorna undefined se não tiver o elemento

aprovados[3] = 'Paulo' //adicionando elementos
//outra forma de adicionar o ultimo elemento é com o push
aprovados.push('Magda')

/*a primeira forma de adicionar mostrada é mais usada para 
substituir valores, a mais usada para adicionar elementos é
o push*/

console.log(aprovados.length) //mostra o tamanho do array

/*é permitido pular elementos, os valores pulados terão valor
undefined, mas existirão no array.*/
aprovados[9] = 'Rafael'

console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort() //ordena o array em ordem alfabetica
console.log(aprovados)

/*excluir elemento não vai reordenar o array, vai ficar com o
valor undefined*/
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

//.splice serve para remover e adicionar elementos


//excluindo
/*no exemplo abaixo vamos usar o primeiro elementeo para dizer a partir
de qual elemento do array o splice vai trabalhar e o segundo vai dizer ate que 
altura do array vai querer excluir os elementos*/
aprovados.splice(1, 2)
console.log(aprovados)

/*da mesmo forma o primeiro elemento do metodo diz onde começa a agir e 
o segeundo fica com o valor 0 para não remover nenhum elemento. Em seguida 
vai ser adicionado de forma sequenciada os procimos elementos no array que 
foram passados como parametro para o splice*/

aprovados.splice(1, 0, 'Fernanda', 'Andreia')
console.log(aprovados)
