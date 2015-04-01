module.exports = {
  options: {
    //concat: true
  },
  dist: {
    expand: true,
    cwd: '<%= cfg.sourceDir %>/javascripts/components',
    src: '**/*.tag',
    dest: '<%= cfg.serverDir %>/javascripts/components',
    ext: '.js'
  }
};