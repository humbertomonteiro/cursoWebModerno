const gulp = require('gulp')
const series = gulp.series

/*O gulp trabalha em serie, quer dizer que as funções vão sendo feitas uma de cada vez*/
const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //selecionando arquivos com array
      
    gulp.src('pastaA/**/*.txt') //vai buscar todos os arquivos que tem .txt no final.
    //.pipe(imagePelaMetade()) //serve para fazer transformações ou aplicar tranformações nos seus arquivos
        //.pipe(imageEmPretoEBranco())
        //.pipe(tranfomacaoA())
        //.pipe(tranformacaoB())
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('fim')
    return cb()
}

module.exports.default = series(
    antes1, 
    antes2, //dessa forma as funções vão ser paralelas.
    copiar,
    fim,
)