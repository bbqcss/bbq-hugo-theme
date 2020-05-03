const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const path = require('path');

module.exports = {
  entry: {
    bbq: './src/sass/index.scss',
  },
  output: {
    path: path.resolve(__dirname, 'static/assets/'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
                sourceComments: false,
              },
            },
          },
          // 'sass-loader',
          // 'postcss-loader',
          // 'postcss-cssnext',
          // 'cssnano',
        ],
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};