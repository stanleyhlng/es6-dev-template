module.exports = function(grunt) {
    'use strict';

    var config = {
        ENV: grunt.option('env') || 'dev',
        pkg: grunt.file.readJSON('package.json'),
        workspace: process.cwd()
    };

    grunt.initConfig(config);

    grunt.loadTasks('tasks');

    grunt.registerTask('lint', [
        'eslint'
    ]);

    grunt.registerTask('default', [
        'clean',
        'babel',
        'copy'
        ]
    );

    grunt.registerTask('dev', [
        'clean',
        'lint',
        'babel',
        'copy',
        'connect',
        'watch'
        ]
    );
};
