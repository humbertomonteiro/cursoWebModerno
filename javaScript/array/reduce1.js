const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Maria', nota: 8.7, bolsista: true}
]

/*o primeiro parametro do reduce usa o primeiro elemento e o segundo elemento do array
com alguma logica. O resultado será um acumulador passando a mesma logica para os proximos elementos 
do array.*/
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) //O valor 10 é o acumulador, ele pode ser passado depois da callback, funciona como o primeiro elemento do array.

console.log(resultado)