const escola = "Cod3r"

console.log(escola.charAt(4))//Mostra de acordo com o que digitar o caracter da str
console.log(escola.charAt(5))//Se não tiver o caracter, mostra um espaço vazio
console.log(escola.charCodeAt(3))//Mostra o código do caracter solicitado
console.log(escola.indexOf('3'))//Mostra a posição de um caracter

console.log(escola.substring(1))//Mostra a partir do caracter solicitado
console.log(escola.substring(0, 3))//Mostra estre os caracteres solicitados

console.log('Escola '.concat(escola).concat("!"))//Faz concatenações o sinal de + tambem serve
console.log(escola.replace(3, 'e'))//Troca o caracter solicitado pelo que foi expresso

console.log('Ana,Maria,Pedro'.split(','))

/* Transforma strings em array tirando o caracter expresso
 * no split
 */