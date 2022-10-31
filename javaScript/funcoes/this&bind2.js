function Pessoa() {
    this.idade = 0 //passando o this dentro de uma função para ela poder ser mudada fora do contexto de onde foi declarado.
    //setInterval faz algo acontecer dentro de algum intervalo.
    setInterval(function () {
        this.idade++ //instanciando com this o contexto da variavel sera mudado e entao não sera passado corretamente.
        console.log(this.idade) // essa função anônima faz acrescentar mais um a idade a cada intervalo passado.
    }, 1000) //o intervalo passado foi 1000 milisegundo que vale 1 minuto
}

idade = 15 //mudadndo a variavel que está dentro da função. Só da pra fazer isso se estiver instaciada com o this para deixar ela publica.

new Pessoa

//função bind

function Pessoa2 () {
    this.idade2 = 0
    setInterval(function () {
        this.idad2++
        console.log(this.idade2)
    }.bind(this.pessoa)/*para resolver o problema de contexto com o bind*/, 1000)
}

//new Pessoa2

//armazenando o this numa const

function Pessoa3 () {
    this.idade3 = 0

    const self = this //o this aqui sera o obj pessoa3
    setInterval(function () {
        self.idade3++ //trocamos o this pela constante com this que queremos
        console.log(self.idade3)
    }, 1000)
}

//new Pessoa3