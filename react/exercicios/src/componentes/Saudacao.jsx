//importando o component do react

import React, { Component } from "react"

//componente baseado em classe.
/*criamos a classe normalmente e passamos como extends o component que 
importamos do react, para conseguirmos ultilizar as propriedades */
export default class Saudacao extends Component {

    /*state é o estado do componente, que só será mudado caso mude o state,
    Estamos atribuindo ao state um objeto com os parâmetros que queremos
    user. Ainda precisamos de outra função para mudar de fato o state. Leia 
    a linha 35*/
    state = {
        /*Aqui os parâmetros estão referenciando o props, que será a primeira
        atribuição do estado.*/
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    /*função construtora que precisa do super para que as propriedades sejam
    passadas para a função construtora. Porque usamos essa função construtora?
    no evento onChange podemos passar uma arrow function que preservara o this,
    ou podemos passar a função diretamente, sem invocala. Da segunda forma o this
    não será o que é esperado, então para resolver usamos a função construtora.*/
    constructor(props) {
            super(props)

            //Vamos usar a função bind para setar o this correto.
            this.setTipo = this.setTipo.bind(this)
        }

    //função disparada pelo evento onChange. Linha 71
    setTipo(e) {
        /*A função setState que irá mudar o estado do componente, então vamos 
        passar para essa função um objeto que receberar um ou mais parâmetros
        que queremos alterar. */
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        /*vamos usar o destructuring para pegar as propriedades que desejamos
        para funcionar temos que usar o this para referenciar ao objeto atual.

        Podemos passar o próprio props que foram os parâmetros recebidos pelo
        componente, mas passando o props não vamos conseguir mudar o estado do
        componente, pois são apenaos paraleitura. */

        //const { tipo, nome } = this.props

        /*Todo atributo do componente tem o state(que é o estado do componente). 
        Esse estado pode ser mudado, diferento do props. Então para conseguirmos 
        mudar o state ou o estado do componente, vamos primeiro ter que fazer 
        alguns ajustes. 
        
        Para começar vamos pegar os parâmetros do state e não do props.*/
        //Leia a linha 10
        const { tipo, nome } = this.state

        /*para retornar mais de uma linha de código, usamos parêntesis. Falamos 
        que estamos retornando uma expressão*/
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." 
                value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}