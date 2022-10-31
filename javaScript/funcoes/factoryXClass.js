class pessoa {
    constructor(nome) { //função chamada nas classes para criar pessoas
        this.nome = nome //essa variável é pública por conta do this
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    } //para acessar a variável precisa do this, pois o contexto dela é o da função onde foi declarada
}

const p1 = new pessoa('João') //criando uma constante com um novo objeto pessoa e dando o valor desejado.
p1.falar() //chamando o novo objeto com a função const  ruida na class

//function factory

const criarPessoa = nome => { //função arrow que retorna um obj com um parâmetro nome
    return {
        falar: () => console.log(`Meu nome é ${nome}`) //metodo falar com função arrow que retorna uma string com o parâmetro da função
    }//não precisa usar o this pois funções arrow tem o this constante.
}

const p2 = criarPessoa('Humberto') //criando uma constante com a função factory e passando o parâmetro para função
p2.falar() //chamando a função com a constante criada.