var extend = require('extend');

/**
 * Returns default files object appended/overwritten with given key:value pairs
 */
function filesObj(obj) {
  return extend({
    expand: true,
    cwd: '<%= cfg.sourceDir %>',
    src: 'stylesheets/!(_)*.less',
    dest: '<%= cfg.serverDir %>',
    ext: '.css',
    extDot: 'last'
  }, obj);
}

module.exports = {
  dev: {
    options: {
      sourceMap: true,
      sourceMapFileInline: true
    },
    files: [
      filesObj()
    ]
  },

  dist: {
    options: {
      cleancss: true,
      compress: true
    },
    files: [
      filesObj({
        dest: '<%= cfg.deployDir %>'
      })
    ]
  }
};
