module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.config('copy', {
        main: {
            cwd: './src/sample',
            src: 'index.html',
            dest: 'dist/',
            expand: true,
            flatten: true,
            filter: 'isFile'
        }
    });
};
