
const webpack = require('webpack')

module.exports = {
  entry: {
    bundle: [
      './docs/entry'
    ]
  },

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        loader: 'html!markdown'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],

  devServer: {
    contentBase: 'docs'
  }
}

