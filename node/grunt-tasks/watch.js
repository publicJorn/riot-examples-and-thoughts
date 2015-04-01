// Watch is usually only used during 'dev' task, so the tasks below execute the :dev sub tasks

module.exports = {
  options: {
    interrupt: true
  },

  // When less files change, run less task
  // When less task finishes, the .css files in serverDir are updated, so the next task is triggered
  less: {
    files: ['<%= cfg.sourceDir %>/stylesheets/*.less'],
    tasks: ['less:dev']
  },

  riot: {
     files: ['<%= cfg.sourceDir %>/javascripts/components/*.tag'],
     tasks: ['riot']
  },

  // Reload the browser when these files change
  // Note: It's best to use specific selectors as using wildcards like `**/*` will make the watch task slow
  server: {
    options: {
      livereload: '<%= cfg.liveReloadPort %>'
    },
    files: [
      '<%= cfg.serverDir %>/stylesheets/*.css',
      '<%= cfg.serverDir %>/javascripts/**/*.js',
      '<%= cfg.sourceDir %>/javascripts/**/*.js',
      '<%= cfg.sourceDir %>/*.html',
      '<%= cfg.sourceDir %>/components/*.tag'
    ]
  }
};
