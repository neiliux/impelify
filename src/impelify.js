var moduleName = 'impelifyModule',
    impelifyModule = angular.module(moduleName, []);

impelifyModule.directive('impelify', function() {
    function attachEvents(element, type, callback) {
        var pfx = ["webkit", "moz", "MS", "o", ""];

        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) {
                type = type.toLowerCase();
            }

            element.on(pfx[p] + type, callback);
        }
    }

    return {
        restrict: 'A',
        scope: {
            start: '&onStart',
            end: '&onEnd',
            transition: '&onTransition'
        },
        controller: ['$scope', function(scope) {
            scope.startFunc = scope.start();
            scope.endFunc = scope.end();
            scope.transFunc = scope.transition();
        }],
        link: function(scope, element) {
            function invokeFunc(func, event) {
                if (func) {
                    scope.$apply(function () {
                        func(event);
                    });
                }
            }

            function animationStart(event) {
                invokeFunc(scope.startFunc, event);
            }

            function animationEnd(event) {
                invokeFunc(scope.endFunc, event);
            }

            function animationTransition(event) {
                invokeFunc(scope.transFunc, event);
            }

            attachEvents(element, 'AnimationStart', animationStart);
            attachEvents(element, 'AnimationEnd', animationEnd);
            attachEvents(element, 'AnimationTransition', animationTransition);
        }
    };
});
