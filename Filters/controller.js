var module1 = angular.module('module1',[]);

module1.controller('controller1',function($scope, $http){
	$http.get('teams.json').success(function(data){
		$scope.teams = data;
	});
	
	$scope.sortBy = 'fanCount';
	$scope.reverse = true;
});