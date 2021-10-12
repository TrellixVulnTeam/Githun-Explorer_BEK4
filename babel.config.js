module.exports ={
    presets:[
        '@babel/preset-env', //biblioteca do babel que identifica onde a aplicação está sendo executada para converter o código de maneira correta
        '@babel/preset-typescript',
        ['@babel/preset-react',{
            runtime: 'automatic'
        }]
    ]
}