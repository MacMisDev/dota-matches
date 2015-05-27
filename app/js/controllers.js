'use strict';

/* Controllers */

var dotaControllers = angular.module('dotaControllers', ['dotaServices']);

dotaControllers.controller('dotaMatchesListCtrl', ['$scope', 'Match',
    function($scope, Match){
        $scope.matches = Match.query();
    }]);



dotaControllers.controller('dotaMatchesDetailCtrl', ['$scope', '$routeParams', 'Match',
    function($scope, $routeParams, Match){
        $scope.match = Match.get({
            matchId: $routeParams.matchId
        });

        console.log($scope.match);

    }]);