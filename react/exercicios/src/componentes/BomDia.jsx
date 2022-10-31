//exportando com parâmetro

/*
Temos uma convenção na hora de colocar os parâmetros, usamos a 
palavra props(propriedades) que usamos nas funções que vamos ter 
parâmetros. E para usarmos vamos colocar entre chaves, o parametro 
com a notação ponto e informar o nome da propriedade que wstamos
usando.
*/
export default props => <h1>Bom dia {props.nome}!</h1>

/*

Formas de passar mais de um conponente

será adicionado uma div na sua DOM com seus componentes:

export default props =>
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>

*/

/*

Das formas abaixo não será adicionado nenhum elemento na sua 
DOM, além do elemento passado.

export default props =>
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>

para usarmos o React.Fragment temos que importar o React
ou podemos inportar o Fragment assim:

import React, { Fragment } from 'react'

export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>

sempre que for exportar com arrays, é recomendado que os 
elementos tenham keys

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

*/