

function falarDepoisDe(segundos, frase) {
    /*exitem dois parametros principais no promise, que é 
    quando uma promessa é realmente resolvida e o rejecte 
    quando por algum motivo você deseja rejeitar o atendimento
    dessa promessa*/
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))