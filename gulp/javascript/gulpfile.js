const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //não enviará os comentarios dos arquivos
            presets: ["env"] //esse preset vai pegar o javascript masi novo possivel e traformar num codigo mais compativel com o browser
        }))
        .pipe(uglify()) //pega todo o codigo para ser minificado (retira todos os espaços em branco)
        .on('error', err => console.log(err)) //essa função faz algo quando acontecer algum evento
        .pipe(concat('codigo.mim.js')) //ira pegar todos os arquivos e concatenar em um novo arquivo (depois de todos os pipes)
        .pipe(gulp.dest('build'))

    // return cb() pode ser retornado dessa forma, como uma callback
}

exports.default = series(transformacaoJS)