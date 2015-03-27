module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-karma-coveralls');

    grunt.config('coveralls', {
        options: {
            debug: true,
            coverageDir: '<%= workspace %>/build/artifacts/coverage/mocha/',
            dryRun: false,
            force: true,
            recursive: true
        }
    });
};
