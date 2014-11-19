var myModule = angular.module('myModule', []);

var MyFunc = function() {
	this.name = 'Factory';
	console.log('init constructor');
	
	this.$get = function() {
		console.log('$get function');
		this.name = 'Provider';
		return this.name;
	};

	console.log('end constructor');
	return this.name;
};

myModule.service('myService', MyFunc);

myModule.factory('myFactory', MyFunc);

myModule.provider('myProvider', MyFunc);

myModule.controller('myController', [ '$scope', 'myService', 'myFactory',
		'myProvider', function($scope, myService, myFactory, myProvider) {
			$scope.serviceMsg = myService;
			$scope.factoryMsg = myFactory;
			$scope.providerMsg = myProvider;
		}]);