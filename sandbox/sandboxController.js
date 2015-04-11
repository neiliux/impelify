define(['angular'], function(angular) {
    function sandboxController(scope) {
        scope.show = false;

        scope.start = function() {
            console.log('start cb');
        };

        scope.end = function() {
            console.log('stop cb');
            scope.show = true;
        };

        setTimeout(function() {
            console.log('adding class');
            angular.element('.animContainer').addClass('anim');
        }, 5000);
    }

    sandboxController.$name = 'sandboxController';
    sandboxController.$inject = ['$scope'];

    return sandboxController;
});