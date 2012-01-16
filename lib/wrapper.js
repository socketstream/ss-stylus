// Stylus 'CSS' wrapper for SocketStream 0.3

var fs = require('fs')
  , stylus = require('stylus');

exports.init = function(root, config) {

  return {

    name: 'Stylus',

    extensions: ['styl', 'stylus'],

    assetType: 'css',

    contentType: 'text/css',

    compile: function(path, options, cb) {
      
      // Get dir from path to enable @include commmand
      var dir = path.split('/'); dir.pop();

      var input = fs.readFileSync(path, 'utf8');

      var compress = options && options.compress;

      stylus.render(input, {filename: path, paths: [dir.join('/')], compress: compress}, function(err, css) {
        if (err) {
          console.log('! - Unable to compile Stylus file %s into CSS', path);
          console.log(err);
        }
        cb(css);
      });
    }
  }
}