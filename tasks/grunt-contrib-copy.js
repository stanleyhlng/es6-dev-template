module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.config('copy', {
        index: {
            cwd: '<%= workspace %>/src/sample',
            src: '**/*.html',
            dest: 'dist/',
            expand: true,
            flatten: false,
            filter: 'isFile'
        },
        src: {
            cwd: '<%= workspace %>/build/src',
            src: [
                '**/*.js',
                '**/*.map'
            ],
            dest: 'dist/',
            expand: true,
            flatten: false
        }
    });
};
