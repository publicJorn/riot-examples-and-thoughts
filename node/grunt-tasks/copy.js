module.exports = {
  dist: {
    expand: true,
    cwd: '<%= cfg.sourceDir %>',
    src: '*.html',
    dest: '<%= cfg.deployDir %>/'
  }
};