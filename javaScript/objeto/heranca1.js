const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) //prototype só tem em funções. Objeto só tem o atributo __proto__
console.log(ferrari.__proto__) //consegue acessar o prototype    do objeto
console.log(ferrari.__proto__ === Object.prototype) //representa o prototype de mais auto nivel, não tem outro depois dele
console.log(volvo.__proto__ === Object.prototype) //o prototipo dos dois objetos criados são iguais

console.log(Object.prototype.__porto__) //é null pois não tem nenhum depois desse

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto) //os dois são funções
console.log(Object.prototype, meuObjeto.prototype) //toda função tem prototype