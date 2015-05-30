'use strict';

/* Directives */

var dotaDirectives = angular.module('dotaDirectives', []);

dotaDirectives.directive('tableHead', function() {
    console.log('ta');
    return {
        //'E' - only matches element name

        restrict: 'A',
        templateUrl: 'partials/table.html'
    };
});