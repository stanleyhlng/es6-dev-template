// Karma configuration
// Generated on Wed Mar 25 2015 22:47:59 GMT-0700 (PDT)

module.exports = function(config) {
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '35'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '30'
    },
    sl_ios_safari: {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.9',
      version: '7.1'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    }
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'cajon', 'chai'],


    // list of files / patterns to load in the browser
    files: [
        // {
        //     pattern: 'build/src/**/*.js',
        //     included: false
        // },
        //
        // {
        //     pattern: 'build/src/**/*.js.map',
        //     included: false
        // },
        //
        // {
        //     pattern: 'build/test/unit/**/*.spec.js',
        //     included: false
        // },

        'node_modules/babel-core/browser-polyfill.js',

        {
            pattern: 'src/**/*.es6',
            included: false
        },

        {
            pattern: 'test/unit/**/*.spec.es6',
            included: false
        },

        {
            pattern: 'test/unit/**/bdd.spec.js',
            included: false
        },

        {
            pattern: 'test/bootstrap.js',
            included: true
        }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        //'build/src/**/*.js': ['coverage']
        'src/**/*.es6': ['babel', 'coverage'],
        'test/**/*.spec.es6': ['babel']
    },


    babelPreprocessor: {
        options: {
            modules: 'common',
            sourceMap: 'inline'
        },
        filename: function(file) {
            return file.originalPath.replace(/\.es6$/, '.js');
        },
        sourceFileName: function(file) {
            return file.originalPath;
        }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage', 'saucelabs'],


    mochaReporter: {
        output: 'autowatch'
    },


    tapReporter: {
        outputFile: 'results.tap'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: process.env.TRAVIS ? ['Firefox'] : ['PhantomJS'],
    //browsers: ['PhantomJS'],
    browsers: [''].concat(Object.keys(customLaunchers)),


    customLaunchers: customLaunchers,


    sauceLabs: {
        testName: 'The es6-dev-template Unit Tests'
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
