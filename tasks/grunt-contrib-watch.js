module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        options: {
            livereload: true
        },
        src: {
            files: [
                'src/**/*.*',
                'test/**/*.*'
            ],
            tasks: [
                'default'
            ]
        }
    });
};
