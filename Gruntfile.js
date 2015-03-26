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

    grunt.registerTask('compile', [
        'babel',
        'copy',
    ]);

    grunt.registerTask('default', [
        'clean',
        'compile'
        ]
    );

    grunt.registerTask('dev', [
        'clean',
        'lint',
        'compile',
        'connect',
        'watch'
        ]
    );
};
