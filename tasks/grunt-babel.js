module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-babel');

    grunt.config('babel', {
        options: {
            modules: 'amd',
            sourceMap: true
        },
        src: {
            files: [
                {
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**/*.es6'
                    ],
                    dest: 'build/src/',
                    ext: '.js'
                }
            ],
        },
        test: {
            options: {
                sourceMap: false
            },
            files: [
                {
                    expand: true,
                    cwd: 'test/',
                    src: [
                        '**/*.spec.es6'
                    ],
                    dest: 'build/test/',
                    ext: '.spec.js'
                }
            ]
        }
    });
};
