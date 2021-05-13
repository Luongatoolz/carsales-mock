const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');  // adding '/' makes it absolute path
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.join(SRC_DIR,'/js/app.js'),
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  //mode: 'development', //important: optimises for development
  //devtool: 'inline-source-map', //enables visual studio debugging
  mode: 'production', 
  devtool: false,
  module: {
    rules: [
        {
            test: /\.scss$/,
            use:[
                MiniCssExtractPlugin.loader,
                {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  },
                  {
                      // Loads a SASS/SCSS file and compiles it to CSS
                      loader: 'sass-loader'
                  },
                  {
                    // Loader for webpack to process CSS with PostCSS
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
    // add alias for application code directory
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
            filename: "app.css"
        })
    ]
};