module.exports = {
  options: {
    // template : 'jade',
    // type : 'coffeescript'
  },
  dev: {
    expand: true,
    cwd: '<%= cfg.sourceDir %>/javascripts/components',
    src: '**/*.tag',
    dest: '<%= cfg.serverDir %>/javascripts/components',
    ext: '.js'
  }
};