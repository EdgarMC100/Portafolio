//COnfiguracion inicial de webpack que usaremos para compilar nuestro archivo y mandarlo a producción
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


//crear modulo y exportarlo

module.exports = {
    entry : './src/index.js', // elemento principal o punto de entrada
    output : {//donde se guardara o se mandara nuestro proyecto
        path: path.resolve(__dirname, 'dist'), //en dist se encuentran los archivos que mandaremos a produccion
        filename: 'bundle.js' //Compilado de javascript construido
    },
    resolve:{ //Indicando con que archivos se trabajara
        extensions:['.js','.jsx']
    },
    module:{//modulo que contendra las reglas de nuestro proyecto
        rules:[
            {   //Regla para identificar archivos js y jsx

                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use:{ //uso del loader
                    loader: "babel-loader",
                }
            },
            {   //Regla para identificar archivos html de nuestro proyecto
                test: /\.html$/,
                use:[{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins:[ //Plugin generar un index.html de public a dist para produccion
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        }),
        new FaviconsWebpackPlugin('./public/react.png')
    ]
}