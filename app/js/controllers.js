'use strict';

/* Controllers */

var dotaControllers = angular.module('dotaControllers', ['dotaServices']);

dotaControllers.controller('dotaMatchesListCtrl', ['$scope', 'Match', 'Hero',
    function($scope, Match, Hero){
        $scope.matches = Match.query();

        var heroes = Hero.query();


        $scope.getName = function(id){
            //Je¿eli zostali wczytani herosi, to zwróæ imiê danego herosa
            if(heroes.length > 0){
                return heroes[id-1].name;
            }
        }
    }]);



dotaControllers.controller('dotaMatchesDetailCtrl', ['$scope', '$routeParams', 'Match',
    function($scope, $routeParams, Match){
        $scope.match = Match.get({
            matchId: $routeParams.matchId
        });

    }]);