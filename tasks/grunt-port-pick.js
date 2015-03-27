module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-port-pick');
    grunt.config('portPick', {
        karma: {
            targets: [
                'karma.unit.options.port'
            ]
        }
    });
};
