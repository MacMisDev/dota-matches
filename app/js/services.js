'use strict';

/* Services */

var dotaServices = angular.module('dotaServices', ['ngResource']);

dotaServices.factory('Match', ['$resource',
    function($resource){

        return $resource('matches/:matchId.json', {}, {
            query: {method:'GET', params:{matchId:'matches'}, isArray:true}
        });
    }]);

dotaServices.factory('Hero', ['$resource',
    function($resource){
        var heroes = $resource('matches/heroes.json', {}, {
            query: {method:'GET', isArray:true}
        });
        return heroes;
    }]);