const construtor = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = construtor('Fernanda')
p1.falar()