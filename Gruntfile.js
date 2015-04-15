module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        devserver: {
            server: {},
            options: {
                port: 8080,
                base: '.',
                async: true
            }
        },
        karma: { unit: { configFile: 'karma.conf.js' } },
        jshint: {
            'options': { jshintrc: '.jshintrc' },
            all: [
                '*.js',
                'src/**/*.js',
                'test/**/*.js'
            ]
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: '',
                    paths: {
                        angular: 'bower_components/angular/angular'
                    },
                    out: 'lib/impelify.js',
                    include: ['src/impelify'],
                    exclude: ['angular']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', [
        'jshint',
        'karma'
    ]);

    grunt.registerTask('dev', [
        'jshint',
        'karma',
        'devserver'
    ]);

    grunt.registerTask('prod', [
        'jshint',
        'karma',
       'requirejs'
    ]);
};