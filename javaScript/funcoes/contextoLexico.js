const valor = 'Global'

//a função tem um contexto próprio
function minhaFuncao() {
    console.log(valor)
}
/*então aqui nesse console.log ela vai achar a constante valor 
de onde a função foi declarada, nesse caso no escopo global*/

function exec() {
    const valor = 'Local' // o escopo dessa constante é o da própria função.
    minhaFuncao() /*mesmo sendo chamada aqui dentro de outra função, o que será
    mostrado é a constante com o valor global pois o contexto dela foi setado
    na declaração e na chamada não será mudada.*/
}

exec()