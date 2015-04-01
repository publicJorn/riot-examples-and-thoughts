module.exports = {
  dev: {
    options: {
      hostname: '<%= cfg.serverHostname %>',
      port: '<%= cfg.serverPort %>',
      // keepalive: true, // instead of watch
      base: [
        '.', // Allows usage of eg `/bower_modules` in src/href
        '<%= cfg.sourceDir %>',
        '<%= cfg.serverDir %>'
      ]

      // Automatically open browser
//      ,open: {
//        target: 'http://<%= connect.dev.options.hostname %>:<%= connect.dev.options.port %>'
//      }
    }
  }
};