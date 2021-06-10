// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    resources: [{ from: 'src/resources/', to: 'dist/resources/' }],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              { loader: 'css-loader', options: { importLoaders: 1 } }
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'main.css'
        })
      ]
};
