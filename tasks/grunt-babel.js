module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-babel');
    grunt.config('babel', {
        options: {
            modules: 'amd',
            sourceMap: true
        },
        build: [
            files: [{
                expand: true,
                cwd: 'src/',
                src: [
                    '**/*.js'
                ],
                dest: 'dist/'
            }]
        ]
    });
};
