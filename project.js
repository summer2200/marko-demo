// var template = require('./routes/detail/index.marko');

// module.exports = require("marko-starter").projectConfig({
//     name: "marko-demo", // Optional, but added here for demo purposes
//     plugins: ['marko-starter-babel']

//   });

module.exports = require('marko-starter').projectConfig({
  routePathPrefix: '/',
  lassoConfig: {
      bundlingEnabled: isProduction,
      fingerprintsEnabled: isProduction,
      require: {
        // ...
      },
      minifyJS: false,
      plugins: [
          'lasso-marko'
      ]
  }
});