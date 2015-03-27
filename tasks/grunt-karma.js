module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-karma');
    grunt.config('karma', {
        unit: {
            configFile: '<%= workspace %>/karma.conf.js',
            singleRun: true,
            options: {
                tapReporter: {
                    outputFile: '<%= workspace %>/build/artifacts/test/mocha/results.tap'
                },
                coverageReporter: {
                    type: 'lcov',
                    dir: '<%= workspace %>/build/artifacts/coverage/mocha/'
                },
                port: 0
            }
        }
    });
};
