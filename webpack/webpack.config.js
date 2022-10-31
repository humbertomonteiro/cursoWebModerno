const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack') //importando webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //exportando
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = { //aqui sera importado um objeto com toda a configuração que representa o webpack
    mode: modoDev ? 'development' : 'production', //passamos primeiro o modo (produção ou desenvolvimento)
    entry: './src/principal.js', //passamos o arquivo de entrada
    output: { //configurando a pasta de saída. Carregará sem essa configuração criando uma pasta dist e o arquivo main
        filename: 'principal.js', //passado essa configuração será criada a pasta dist e o nome do arquivo será o passado para o argumento.
        path: __dirname + '/public' //assim podemos configurar a pasta dist que será criada tambem
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [ //area especifica para os plugins
        new MiniCssExtractPlugin({ //função construtora que será passado um objeto com os parametros
            filename: 'estilo.css' //o nome do arquivo que será gerado
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {//configurar loader com suas regras
        rules: [{//rules são as regras
            test: /\.s?[ac]ss$/, //espreção que mostra qual tipo de arquivo será interpretado
            use: [ //passamos os loaders aqui
                MiniCssExtractPlugin.loader, //dentro do plugin vamos chamar o loader para ser usado no use que interpreta o css
                //'style-loader',// loader que adiciona css a dom injetando a tag <style>
                'css-loader', //interpreta @import, url... ex: se dentro de um css estiver uma url com uma imagem, quem interpretará é esse loader
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}