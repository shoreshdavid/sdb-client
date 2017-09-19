import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


// check environment status'es
const CMD = process.env.npm_lifecycle_event;
const isProduction = CMD === 'production';
process.env.BABEL_ENV = CMD;

const PATH = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
}

const productionPlugins = [
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    minimize: true,
    comments: false,
    beautify: false,
    mangle: {
      screw_ie8: true
    },
    compress: {
      screw_ie8: true,
      unused: true,
      dead_code: true,
      warnings: false
    }
  }),
];


const base =  {
  entry: [
    PATH.src
  ],

  output: {
    path: PATH.build,
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [ 'ts-loader' ],
      },
      {
        test: /\.scss$/, 
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    })
  ],

  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ]
  }

}

const devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATH.build,
    hot: true,
  },
  plugins: [ HtmlWebpackPlugin ]
}

const prodConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [ HtmlWebpackPlugin, productionPlugins ]
}

export default Object.assign({}, base, isProduction === true ? prodConfig : devConfig);


// "env": {
//   "start": {
//     "presets": [
//       "react-hmre"
//     ]
//   }
// }