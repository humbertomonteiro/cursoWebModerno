function arrays(repetir, vezes) {
    const array = []
    for(let i = 0; i < vezes; i++){
        array.push(repetir)
    }
    return array
}
console.log(arrays('conseguir', 5))
console.log(arrays(7, 3))