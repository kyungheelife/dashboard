const path = require('path')

const rootPath = path.resolve(__dirname, '..')
console.log(path.resolve(__dirname, '..'))

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jpg','.jpeg', '.gif', '.png', '.svg', '.ico', '.woff', '.woff2', '.eot', '.ttf', '.otf']
  },
  devtool: 'source-map',
  mode: process.env.NODE_ENV,
  entry: path.resolve(rootPath, 'src', 'main.ts'),
  target: 'electron-main',
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader?limit=100000',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: './'

            },
          },
        ],
      }, 
    ]
  },
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js'
  }
}

