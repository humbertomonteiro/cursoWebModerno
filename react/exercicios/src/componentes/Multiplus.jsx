/*

Aqui vamos exportar funções nomeadas. Para tal, temos que 
colocar as palavras reservadas de variaveis ou constantes e
não vamos usar o default, apenas o export.

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

Dessa forma vamos importar essas funções com o destructuring

*/

/*

Tambem podemos exportar usando o export default da seguinte forma: 

const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite}

*/

/*exportando das duas formas tambem funciona
export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
export default BoaTard

e*/