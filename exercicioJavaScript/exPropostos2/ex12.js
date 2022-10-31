function recebeNumero(array) {
    return array.filter(item => typeof item === "number")
}
    

console.log(recebeNumero(["Javascript", 1, "3", "Web", 20]))