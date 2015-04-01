module.exports = function(grunt) {

  // fs is a default node module, no need to put in package.json
  var fs = require('fs');

  // These node modules are used to access the task config files
  var extend = require('extend');
  var requireDir = require('require-dir');

  // Define project specific variables in node/config.json
  // These will be merged with the contents of package.json and the task configurations
  var config = {};
  config.cfg = grunt.file.readJSON('node/config.json');
  config.pkg = grunt.file.readJSON('package.json');
  extend(config, requireDir(config.cfg.gruntTaskConfig));

//  console.log(JSON.stringify(config, null, 2));

  grunt.initConfig(config);
  require('load-grunt-tasks')(grunt);


  // ------------------------------------------------------
  // Only define the main tasks in gruntfile.js
  // Note that the tasks files can be run separately (eg. `grunt less:dist`)
  grunt.registerTask('default', 'Start a dev server with livereload', [
    'clean',
    'connect:dev',
    'less:dev',
    'watch'
  ]);

  //grunt.registerTask('dist', 'Make ready for production', [
  //  'clean',
  //  'riot',
  //  'less:dist',
  //  'copy:dist'
  //]);
};
