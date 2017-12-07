class ExamplePlugin {
  apply(compiler) {
    compiler.plugin('run', (compiler, cb) => {
      console.log('webpack is running');
      cb();
    });
  }
}

module.exports = ExamplePlugin;
