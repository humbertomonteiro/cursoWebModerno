//em node o arquivo representa um modulo

/*para deixar a variavel ou a constante visivel em outros
arquivos(modulos), usamos uma dessas opções*/

this.ola = 'Fala Pessoal' //dentro do modulo existe um objeto. que você pode atribuir valores
exports.bemVindo = 'Bem vindo ao node' //da mesma forma que o this
module.exports.ateLogo = 'Até o próximo exemplo' // o mais comum de ser usado, mas não atribuindo uma chave valor e sim um objeto novo.(como na pasta moduloB)

/*você está adicionando atributos e atribuindo 
valores ao module.exports.*/