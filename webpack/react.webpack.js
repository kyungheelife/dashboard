const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, '..')
console.log(path.resolve(__dirname, '..'))

module.exports = {
    resolve: {
      extensions: ['.tsx', '.ts', '.js','.jpg','.jpeg', '.gif', '.png', '.svg', '.ico', '.woff', '.woff2', '.eot', '.ttf', '.otf'],
      mainFields: ['main', 'module', 'browser']
    },
    mode: process.env.NODE_ENV,
    entry: path.resolve(rootPath, 'src/App.tsx'),
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          // write image files under 10k to inline or copy image files over 10k
          test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
          use: [
            {
              loader: 'url-loader?limit=100000',
              options: {
                name: 'images/[name].[ext]',
                publicPath: './'
              },
            },
          ],
        },
        {
          // write files under 10k to inline or copy files over 10k
          test: /\.(otf|eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
                publicPath: './'
  
              },
            },
          ],
        }, 
        { 
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loader: "url-loader?limit=10000&minetype=application/font-woff",
          options: {
            name: 'fonts/[name].[ext]',
            publicPath: './'
          },
        },

      ]
    },
    devServer: {
      contentBase: path.join(rootPath, 'dist/renderer'),
      historyApiFallback: true,
      compress: true,
      hot: true,
      host: '0.0.0.0',
      port: 4000,
      publicPath: './'
    },
    output: {
      path: path.resolve(rootPath, 'dist/renderer'),
      filename: 'js/[name].js',
      publicPath: './'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        cache: true,
    }),
    ]
  }
  