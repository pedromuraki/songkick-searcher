const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const PUBLIC_PATH = 'https://url.com/'; // alterar e manter a barra final

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader:
              process.env.NODE_ENV !== 'production'
                ? 'style-loader'
                : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader?url=false'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                return [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer')({
                    browsers: [
                      // 'cover 99.5%' para maior crossbrowser (ex: versões mais antigas do safari)
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9'
                    ],
                    flexbox: 'no-2009'
                  })
                ];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(mp4)$/,
        loader: 'file-loader',
        options: {
          name:
            process.env.NODE_ENV !== 'production'
              ? false
              : 'video/[name]_[hash:7].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name:
            process.env.NODE_ENV !== 'production'
              ? false
              : 'img/[name]_[hash:7].[ext]'
        }
      },
      {
        test: /\.(png)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre',
        options: {
          optipng: {
            enabled: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'cache-id', // alterar
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: true,
      navigateFallback: PUBLIC_PATH + 'index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map'
};
