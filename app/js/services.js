'use strict';

/* Services */

var dotaServices = angular.module('dotaServices', ['ngResource']);

dotaServices.factory('Data', ['$resource',
    function($resource){

        var heroes = $resource('matches/heroes.json', {}, {
            query: {method:'GET', isArray:true}
        });

        var matches = $resource('matches/:matchId.json', {}, {
            query: {method:'GET', params:{matchId:'matches'}, isArray:true}
        });

        return {
            heroes: heroes,
            matches: matches
        };
    }]);
