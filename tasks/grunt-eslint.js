module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-eslint');

    grunt.config('eslint', {
        options: {
            configFile: '.eslintrc',
            rulesPaths: [
                'node_modules/eslint-plugin-import/lib/rules'
            ]
        },
        all: [
            'src/**/*.js'
        ]
    });
};
