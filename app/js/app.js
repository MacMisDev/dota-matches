'use strict';

/* App Module */

var dota = angular.module('dota', [
    'ngRoute',
    'dotaControllers',
    'dotaServices'
]);

dota.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/matches', {
                templateUrl: 'partials/matches-list.html',
                controller: 'dotaMatchesListCtrl'
            }).
            otherwise({
                redirectTo: '/matches'
            });
}]);
