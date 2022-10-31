/*função que vai facilitara a criação de elementos, recebe
dois parametros o nome da tag e a classe*/
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName) //criando elemento
    elem.className = className //passando a classe para o elemento
    return elem //retornando o elemento criado
}

/*função construtora que vai receber como parametro*/
function Barreira(reversa = false) {
    //usando a função para criar a barreira
    this.elemento = novoElemento('div', 'barreira') 

    const borda = novoElemento('div', 'borda') //criando borda
    const corpo = novoElemento('div', 'corpo') //criando corpo

    /*criando barreiras de acordo com o parametro recebido pelo
    metodo*/ 
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    //função para setar altura
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/*const b = new Barreira(false)
b.setAltura(200)
document.querySelector('[flappy]').appendChild(b.elemento)*/

//outra função construtora para criar o par de barreiras
function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    //criando barreiras
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    //setando barreiras
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    //sorteando altura
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}


//const b = new ParDeBarreiras(700, 400, 400)
//document.querySelector('[flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio
                && par.getX(0 < meio)
            if(cruzouMeio) notificarPonto()
        })
    }
}

const barreiras = new Barreiras(700, 1200, 400, 200)
const areaDoJogo = document.querySelector('[flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
}, 20)