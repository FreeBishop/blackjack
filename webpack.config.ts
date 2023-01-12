import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';
import 'dotenv/config';

// Determine webpack building mode from server environment
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

// Common webpack configuration
const commonBuild: webpack.Configuration = {
  mode,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name]-[contenthsh].js',
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};

// Homepage webpack build
const homePageBuild: webpack.Configuration = {
  entry: {
    homePage: './resources/ts/homePage.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'html/homePage.html',
      template: path.resolve(__dirname, 'resources/html/homePage.template.html'),
      inject: 'body',
      chunks: ['homePage'],
    }),
  ],
};

// Merge builds together for single webpack configuration and export as default
const webpackConfig = merge(commonBuild, homePageBuild);
export default webpackConfig;
