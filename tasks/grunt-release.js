module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-release');
    grunt.config('release', {
        options: {
            additionalFiles: [
                'bower.json'
            ],
            github: {
                repo: 'stanleyhlng/es6-dev-template',
                usernameVar: 'GITHUB_USERNAME',
                passwordVar: 'GITHUB_PASSWORD'
            }
        }
    });
};
