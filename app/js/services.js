'use strict';

/* Services */

var dotaServices = angular.module('dotaServices', ['ngResource']);

dotaServices.factory('Match', ['$resource',
    function($resource){

        return $resource('matches/:matchId.json', {}, {
            query: {method:'GET', params:{matchId:'matches'}, isArray:true}
        });
    }]);
