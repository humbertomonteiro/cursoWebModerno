//uma função factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

//esse metodo incrementa mais um a cada chamada