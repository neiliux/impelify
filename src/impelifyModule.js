/*global document */

define(['angular', 'src/impelifyDirective'], function(angular, impelifyDirective) {
    var moduleName = 'impelifyModule',
        module = angular.module(moduleName, []);

    module.directive(impelifyDirective.$name, impelifyDirective);

    module.bootstrap = function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, [moduleName]);
        });
    };

    return module;
});
