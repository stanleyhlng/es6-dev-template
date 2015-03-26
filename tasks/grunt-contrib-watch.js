module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        src: {
            files: [
                'src/**/*.*'
            ],
            tasks: [
                'default'
            ]
        }
    });
};
