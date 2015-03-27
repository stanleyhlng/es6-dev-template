module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-docco');

    grunt.config('docco', {
        documentation: {
            options: {
                output: 'docs/'
            },
            src: [
                'build/src/**/*.*',
                'build/test/**/*.*'
            ]
        }
    });
};
