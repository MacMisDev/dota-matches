'use strict';

/* Filters */

var dotaFilters = angular.module('dotaFilters', []);

dotaFilters.filter('checkWhoWin', function() {
    return function(input) {
        return input ? 'Radiant victory' : 'Dire victory';
    };
});

dotaFilters.filter('checkGameMode', function() {
    return function(input) {
        if(input === 1){
            return 'Normal All Pick';
        }else if(input === 18){
            return 'Ability Draft';
        }else if(input === 22){
            return 'Ranked All Pick';
        }
    };
});

dotaFilters.filter('convertTime', function() {
    return function(input) {
        var min = Math.floor(input / 60);
        var sec = input % 60;
        return min + ':' + sec;
    };
});