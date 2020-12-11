const paths = require('path');

module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        paths.resolve(__dirname, './src/assets/styles/app-mixins.scss'),
      ],
    },
  },
};
