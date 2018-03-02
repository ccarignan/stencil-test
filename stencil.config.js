const less = require('@stencil/less');

exports.config = {
  namespace: 'aqcomponents',
  wwwDir: 'docs',
  generateDistribution: true,
  serviceWorker: false,
  plugins: [
    less()
  ]
};

exports.devServer = {
  root: 'docs',
  watchGlob: '**/**'
}
