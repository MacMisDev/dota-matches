'use strict';

/* App Module */

var dota = angular.module('dota', [
    'ngRoute',
    'ngResource',
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
            when('/matches/:matchId', {
                templateUrl: 'partials/match-detail.html',
                controller: 'dotaMatchesDetailCtrl'
            }).
            otherwise({
                redirectTo: '/matches'
            });
}]);
