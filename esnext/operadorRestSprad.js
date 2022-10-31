//operador ... rest(juntar)/sprad(espalhar)
//usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(funcionario, clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupofinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupofinal)