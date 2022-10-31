//funcões tem seu prototype como já estudado.
//é só colocar o proprio nome da função .prototype

//string, array, objetos entre outros são funções
//então podemos atribuir metodos novas a essas funções
//a função string não tem como padrão na api a função reverse

//console.log('abc'.reverse()) - dará erro


//então podemos criar o metodo
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
//para acessar o valor de uma string, array, etc... usa o this pois se refere ao objeto citado.

console.log('abc'.reverse())