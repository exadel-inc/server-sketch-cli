require('@exadel/server-sketch').start({
  // config should be here. Full list you can find here: node_modules/@exadel/server-sketch/config/default.js
  port: 3000,
  public: [ // Path to static files
    'static/'
    // config.jscssDestFolders will be added
  ],
  jscssDestFolders: [
    '../.temp/dest/' // Path to generated js & css files(used by browserSync & public middleware). Relative to server
  ],
  browserSync: {
    port: 3001
  }
});
