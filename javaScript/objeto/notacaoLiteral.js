const a = 1
const b = 2
const c = 3

//antes do ES 2015
const obj1 = {a: a, b: b, c: c}

//Agora
const obj2 = {a, b, c}

console.log(obj1, obj2)

//criando objetos com variaveis e constantes.

const nome = 'nota'
const valor = 7.78

const obj3 = {} //constroi um obj literal vaziu

//entre [] coloque o atributo
obj3[nome] = valor //atribua o valor do atributo

//ou ja faz tudo dentro do objeto literal
const obj4 = {[nome]: valor}

//Acrecsentando funções em objetos

//antes
const obj5 = {
    funcao1: function() {}
}

//agora
const obj6 = {
    funcao2() {}
}