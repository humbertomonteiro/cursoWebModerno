const primeiroItem = item => item[0]

let p = new Promise(resolve => {
    resolve(['Humberto', 'Fernanda', 'Helena'])
})

.then(primeiroItem)
.then(primeiroItem)
.then(console.log)
