//Função construtora

function Pessoa(nome = 'indefinido', idade = 0, sexo = 'indefinido') {
    this.falar = function() {
        console.log(`Meu nome é ${nome}, tenho ${idade} anos e meu sexo é ${sexo}`)
    }
}

const p1 = new Pessoa('Humberto', 25, 'masculino')
p1.falar()

const p2 = new Pessoa('Fernanda', 25, 'Feminino')
p2.falar()

//Função Factory

const pessoa2 = (nome, idade, sexo) => {
    return {
        nome,
        idade,
        sexo,
        falar2: () => console.log(`Meu nome é ${nome}, tenho ${idade} anos e meu sexo é ${sexo}`)
    }
}

const p3 = pessoa2('Humberto', 25, 'Masculino')
p3.falar2()

//class

class CriarPessoa {
    constructor (nome, idade, sexo) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }

    falar3() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e meu sexo é ${this.sexo}`)
    } 
}

const p4 = new CriarPessoa('Fernanda', 25, 'Feminino')
p4.falar3()