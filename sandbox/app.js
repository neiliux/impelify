/*global require*/

require.config({
    baseUrl: '/',
    paths: {
        angular: '/bower_components/angular/angular',
        jquery: '/bower_components/jquery/dist/jquery'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        jquery: {
            exports: 'jquery'
        }
    }
});

require([
    'jquery',
    'angular'],
    function () {
        'use strict';
        require(['sandbox/sandboxModule'], function (module) {
            module.bootstrap();
        });
    });
