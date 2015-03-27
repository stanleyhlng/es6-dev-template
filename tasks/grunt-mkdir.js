module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.config('mkdir', {
        unit: {
            options: {
                create: ['<%= workspace %>/build/artifacts/test/mocha']
            }
        }
    });

};
