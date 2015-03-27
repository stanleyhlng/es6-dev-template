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

    grunt.registerTask('test', [
        'clean',
        'compile',
        'unit'
    ]);

    grunt.registerTask('unit', [
        'mkdir:unit',
        'portPick:karma',
        'karma:unit'
    ]);

    grunt.registerTask('default', [
        'clean',
        'compile',
        'unit'
        ]
    );

    grunt.registerTask('dev', [
        'clean',
        'lint',
        'compile',
        'unit',
        'connect',
        'watch'
        ]
    );
};
