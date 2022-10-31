function eIgual(txt1, txt2) {
    let tudoIgual = true
    for (let i = 0; i < txt1.length; i++) {
        let letras1 = txt1.charAt(i).toUpperCase()
        for (let h = 0; h < txt2.length; h++) {
            let letras2 = txt2.charAt(h).toUpperCase()
            if( letras1 == letras2) {
                tudoIgual = true
                break
            } else {
                tudoIgual = false
            }
        }
        if(!tudoIgual) {
            return tudoIgual
        }
    }
    return tudoIgual
}
console.log(eIgual('abc', 'cba'))