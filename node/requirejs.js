var requireConfig = require('../../src/javascripts/requireConfig.js');
var requirePaths = requireConfig.paths;
var libraryPaths = ['/node_modules', '/bower_modules', '/bower_components'];
var relativeLibrariesPosition = '../..';

// If a path starts with one of the library paths, prepend relative position
// We only do it for specified "library paths" because not every entry has to be one
// (can also be a shortcut for instance)
Object.keys(requirePaths).forEach(function (key) {
  libraryPaths.every(function (path) {
    if (libraryPaths.indexOf(path) > -1) {
      requirePaths[key] = relativeLibrariesPosition + requirePaths[key];
      return false; // break loop
    }
  });
});


module.exports = {
  dist: {
    options: {
      baseUrl: '<%= cfg.sourceDir %>/javascripts',     // For relatives: `modules/moduleName`
      mainConfigFile: '<%= cfg.sourceDir %>/javascripts/requireConfig.js',
      paths: requirePaths,
      optimize: 'uglify2',

      //findNestedDependencies: true,

      // If a shimmed dependency wants Backbone available
      // https://github.com/jrburke/r.js/blob/b8a6982d2923ae8389355edaa50d2b7f8065a01a/build/example.build.js#L68
      //wrapShim: true,

      // Define output file/module(s)
      name: 'main',
      out: '<%= cfg.deployDir %>/javascripts/main.js'

      // If more than 1 output file, use modules
      // https://github.com/jrburke/r.js/blob/b8a6982d2923ae8389355edaa50d2b7f8065a01a/build/example.build.js#L346
      //modules: [
      //  {
      //    name: '',
      //    include: [''],
      //    exclude: ['']
      //  }
      //]
    }
  }
};
