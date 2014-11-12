var module1 = angular.module('module1', ['ngRoute']);

module1.controller('myController', function($scope) {
	$scope.test = function() {
		alert('controller1 : ' + $scope.name);
	};
});

module1.controller('myController2', function($scope) {
	$scope.test = function() {
		alert('controller2 : ' + $scope.name);
	};
});

module1.config(function($routeProvider) {
	$routeProvider.when('/view1', {
		controller : 'myController',
		templateUrl : 'view1.html'
	}).when('/view2', {
		controller : 'myController2',
		templateUrl : 'view2.html'
	}).otherwise({
		redirectTo : '/view1'
	});
});