//CÓDIGO NÃO EXECUTAVEL!

//procedural
//funções que manipulam dados
prcessamento(valor1, valor2, valor3)

//OO

/*
o objeto passa a ser a figura central, tendo os dados que você
constroi e as funções encapsuladas nele.
*/

objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){}
}

objeto.processamento()

//1. Abstração
/*
trazer para o objeto atributos simplificados, 
apenas os necessarios.
*/

//2. Encapsulamento
/*
deixar disponivel apenas o que será usado por cada 
tipo de usuario.
ex carro:
carro tem mecanica e direção.
Para saber direção você não precisa saber mecanica.
Então terá duas capsulas: direção e mecanica, mas 
para quem vai dirigir será mostrado apenas a capsula
direção.
Assim sua aplicação será menos dependente dos objetos.
*/

//3, Herança
/*
deixar a aplicação com objetos separados por donos.
continuando com o exemplo do carro:
o objeto motor tem varias aplicações que não precisam ser
passadas para o carro, basta informar que o objeto carro tem
tem um objeto motor.
bancos do carro
portas do carro
porta mala do carra
cada um tem suas aplicações e juntos formam o objeto carro.

caso não tenha algum atributo chamado, o objeto recebe o
atributo do dono como herança se o mesmo não tiver o atributo
solicitado.
*/

//4. polimorfismo

/*Um objeto com conceito generico com as funções basicas para 
recebar objetos mais especificos com suas caracteristicas.
exemplo do carro
ferrari tem um motor assim, uma porta assim, etc...
Um uno tem um motor de outro jeiro e a porta de outro jeito,
mas os dois são carros.
*/