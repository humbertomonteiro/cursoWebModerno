import React from 'react'
import ReactDOM from 'react-dom'

/*

importando função anônima com exportação padrão (export default)

estamos importando um componente proprio (um arquivo criado por nós 
mesmos) que contem uma função anônima. Podemos dar qualquer nome 
para esse componente, apenas se atentando que a primeira letra tem 
que ser maiuscula, como no exemplo abaixo.

import Primeiro from './componentes/Primeiro'

Primeiro é o nome da função, e estamos inportando do módulo
inserida depois do from

*/

/*

import BomDia from './componentes/BomDia'

esse inport trás funções que tem parâmetros, melhor explicado 
no próprio arquivo BomDia.jsx

*/

/*

para usarmos as funções importadas chamamos o ReactDOM, usamos
a função render e no primeiro parâmetro dessa função colocamos 
o componente importado como uma tag HTML(podemos passar a tag já
feixada ou abrindo e feixando tag) e no segundo parâmetro usamos 
um seletor DOM para saber em qual elemento do arquivo HTML vamos 
inserir o nosso componente.

ReactDOM.render(<Primeiro />, document.querySelector('#root'))

se quisermos passar algum parâmetro, colocamos dentro da tag passada
ao render.

ReactDOM.render(<BomDia nome="Humberto" />, document.querySelector('#root'))

se o parâmetro não for uma string usamos chaves para passalos

ReactDOM.render(<BomDia idade={25} />, document.querySelector('#root'))

*/

/*

import { BoaTarde, BoaNoite } from './componentes/Multiplus'

usamos o destructuring para inportamos as funções nomeadas e
exportadas apenas com o export.

ReactDOM.render(
    <div>
        <BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>,
    document.getElementById('root'))

podemos inportar mais de uma função assim tambem:

import Mult from './componentes/Multiplus'

nomeamos o módulo como Mult

ReactDOM.render(
    <div>
        <Mult.BoaTarde nome="ana" />
        <Mult.BoaNoite nome='Fernanda' />
    </div>,
    document.querySelector('#root')
)

E para usar na função render usamos a notação ponto.

*/

/*

Aqui vamos importar usando usando a função exportada com o 
export default e usando o destructuring


import BoaNoite, {BoaTarde} from './componentes/Multiplus'

ReactDOM.render(
    <div>
        <BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>,
    document.querySelector('#root')
)

*/


/*

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo='Bom Dia' nome='Humberto' />
    </div>,
    document.querySelector('#root')
)

*/

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome='Humberto' sobrenome='Araújo' >
            <Filho nome='Pedro' />
            <Filho nome='Carla' />
            <Filho nome='Paulo' />
        </Pai>
    </div>,
    document.querySelector('#root')
)

/* 

forma mais nova de render

importamos o createRoot do react-dom/client

import { createRoot } from 'react-dom/client'

atribuimos a uma constante com o nome container o root, que é a div
principal

const container = document.getElementById('root')

em seguida vamos atribuir a uma nova const o metodo importado com
o conteiner como parâmetro

const root = createRoot(container)

e agora é so adicionar a essa nova const o metodo render com o
componente importado

root.render(
    <Pai nome='Humberto' sobrenome='Araújo'/>
)

*/