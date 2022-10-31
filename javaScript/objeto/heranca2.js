//Cadeia de protótipos (prototype chain)

//Não faça atribuições para o Object.prototype, só em casos bem especificos
Object.prototype.attr0 = 'Z' //Se não tiver prototype apontará para Object.prototype
const avo = {attr1: 'A'}
//o primeiro atributo desse objeto aponta para onde ele quer ter como prototype
const pai = {__proto__: avo, attr2: 'B', attr3: 'C'}
const filho = {__proto__: pai, attr3: 'D'}


/*objeto filho não tem o attr1, procura no objeto 
pai que é seu prototype, não encontra e como objeto pai
tem o avo como prototype ele acha o atributo e mostra.*/
console.log(filho.attr1)

/*vai achar pois o objeto avo não tem prototype, e então 
aponta para o Object.prototype que tem o atributo nele 
posto manualmente.*/
console.log(filho.attr0)

/*se o atributo solicitado tiver no proprio objeto que ta 
sendo chamado no protótipo dele, o que será apontado é o de 
menor distancia. No caso o do próprio objeto que chamou.*/
console.log(filho.attr3)



//Objeto que será protótipo para para os outros
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

//dois objetos com o protótipo padrão ainda (Object.prototype)
const ferrari = {
    modelo: 'F40',
    velMax: 324 //sobrescrevendo velMax (shadowing)
}

const volvo = {
    modelo: 'V40',
    status() { //sobrescrevendo o metodo
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //função que passa o primeiro parametro para ser o prototype do segundo.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.status()) // ferrari não tinha a função status, mas por ter o carro como prototype, será herdada essa função.

//mesmo tendo como prototype qualque outro objeto, quando chamado o objeto ele só mostrará o que está nele.
console.log(ferrari)

//outra função apenas do objeto carro que foi herdada para o objeto ferrari
ferrari.acelerar(100)
console.log(ferrari.status())

volvo.acelerar(350) //acelerando mais que a velMax
console.log(volvo.status()) //condição da função acelerar não permite.