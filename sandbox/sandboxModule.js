define([
    'angular',
    'sandbox/sandboxController',
    'src/impelifyModule'],
    function(angular, sandboxController) {
        var moduleName = 'sandbox',
            module = angular.module(moduleName, ['impelifyModule']);

        module.controller(sandboxController.$name, sandboxController);

        module.bootstrap = function () {
            angular.element(document).ready(function () {
                angular.bootstrap(document, [moduleName]);
            });
        };

        return module;
    }
);