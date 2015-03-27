module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.config('jsdoc', {
        dist: {
            options: {
                destination: 'docs/'
            },
            src: [
                'build/src/**/*.*'
            ]
        }
    });
};
