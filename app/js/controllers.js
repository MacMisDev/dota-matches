'use strict';

/* Controllers */

var dotaControllers = angular.module('dotaControllers', ['dotaServices']);

dotaControllers.controller('dotaMatchesListCtrl', ['$scope', 'Data',
    function($scope, Data){

        $scope.matches = Data.matches.query();

        var heroes = Data.heroes.query();


        $scope.getName = function(id){
            //Je¿eli zostali wczytani herosi, to zwróæ imiê danego herosa
            if(heroes.length > 0){
                return heroes[id-1].name;
            }
        }

        $scope.orderProp = 'duration';

    }]);



dotaControllers.controller('dotaMatchesDetailCtrl', ['$scope', '$routeParams', 'Data',
    function($scope, $routeParams, Data){
        $scope.match = Data.matches.get({
            matchId: $routeParams.matchId
        });

    }]);