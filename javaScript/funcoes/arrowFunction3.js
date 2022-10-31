let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //numa função o this é o escopo onde a função foi escrita, nesse caso o escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj) //usando função bind e atribuindo o escopo do objeto criado acima.
comparaComThis(global) //chamando a função o this não será mais do escopo global
comparaComThis(obj) //como esperado o this fica atrelado ao escopo que foi passado a função bind. (obj)


//agora usando a arrow function

comparaArrow = param => console.log(this === param)

comparaArrow(global) //diferente de uma função normal o this aponta para um modolo. Não vai varear de forma alguma.
comparaArrow(module.exports) //justamente para o modulo que é o valor de this
comparaArrow(this) //this === module.exports

comparaArrow(this) //por isso o this é igual a this.

//já no primeiro exemplo com a função normal o this não é o this e sim o obj onde foi escrito.(global no caso do node)

comparaComThis(this) //comfirmando que o this não é o this em uma função normal

comparaArrow = comparaArrow.bind(obj) //com a função arrow nem com o bind muda de contexto

comparaArrow(obj)