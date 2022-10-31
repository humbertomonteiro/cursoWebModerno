function carro(velMax = 200, delta = 5){
    //atributo privado 
    let velAtual = 0 //não tem como acessar direto com carro.velAtual, pois não está publica.
    //não ficou publica para nao poder ser setado uma vel maior que a velMax

    //atributo publico
    this.acelerar = function() { //função responsavel em acrecentar a vel.
        if (velAtual + delta <= velMax) { //condição para que a vel atual não ultrapasse a vel max
            velAtual += delta
        } else { //responsavel em não permitir passar da velMax
            velAtual = velMax
        }
    }

    //atributo publico
    this.getVelAtual = function() { //responsavel em pegar para mostrar a velAtual.
        return velAtual
    }
}

const uno = new carro //criando um obj
uno.acelerar() //acelerando com o valor padrão setado na function acelerar
console.log(uno.getVelAtual()) //mostrando a velAtual

const ferrari = new carro(350, 20) //criando outro obj, mas passando parâmetros diferentes do padrão posto na function construtora
ferrari.acelerar() //usando a function acelerar 3x
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelAtual()) //mostrando o valor da velAtual

console.log(typeof carro)
console.log(typeof ferrari)