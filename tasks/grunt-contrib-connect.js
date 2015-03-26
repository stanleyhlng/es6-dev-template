module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.config('connect', {
        server: {
            options: {
                port: 3000,
                base: './',
                livereload: true
            }
        }
    });
};
