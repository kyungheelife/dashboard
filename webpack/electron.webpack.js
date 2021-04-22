const path = require('path')

const rootPath = path.resolve(__dirname, '..')
console.log(path.resolve(__dirname, '..'))

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
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
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js'
  }
}

