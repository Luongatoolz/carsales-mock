const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry:{
    index: path.join(SRC_DIR,'/js/index.js')
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR
  },
  //mode: 'development', //important: optimises for development
  //devtool: 'inline-source-map', //enables visual studio debugging
   mode: 'production', 
   devtool: false,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]?[contenthash]',
          esModule: false,
          outputPath: 'images',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
              loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                    require('autoprefixer')
                  ]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
        '~': path.resolve(__dirname)
    },
    extensions: ['.js']
  },
  watchOptions: {
      ignored: /node_modules/
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['index'],
      'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no', //Note for this mockup: shrink-to-fit is used to include ios 9-9.2 users ios 9.3 users not needed but wont cause damage
      }
    })
  ]
};