var angular = require('angular');
var app = angular.module('blogApp', []);

app.controller('BlogController', ['$scope', function ($scope) {
    $scope.titulo = "Este titulo es de pruba";
}]);
