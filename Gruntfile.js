module.exports = function(grunt) {
    'use strict';

    var config = {
        
    };

    grunt.initConfig({
        babel: {
            options: {
                modules: 'common',
                sourceMap: true
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**/*.js'
                    ],
                    dest: 'dist/'
                }]
            }
        },
        clean: [
            'dist'
        ],
        copy: {
            main: {
                cwd: './src/sample',
                src: 'index.html',
                dest: 'dist/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['babel', 'copy']);
};
