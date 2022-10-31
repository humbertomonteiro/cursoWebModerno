module.exports = {
    bomDia: 'Bom dia',
    boaNoit() {
        return 'Boa noite'
    }
}

//essa é a forma de atribuir um novo objeto ao modulo
/*se tentar usar o this ou o exports não irá
atribuir um novo objeto, e na hora de importar dará erro*/