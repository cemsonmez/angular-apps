var myModule = angular.module('myModule', []);

myModule.controller('RecordCtrl', function($scope) {
  $scope.records = [{
    name: 'Ahmet',
    done: true
  }, {
    name: 'Ali',
    done: false
  }];

  $scope.addRecord = function() {
    $scope.records.push({
      name: $scope.recordText,
      done: false
    });
    $scope.recordText = '';
  };

  $scope.delRecord = function($recordName) {
    $scope.records = _.without($scope.records, _.findWhere($scope.records, {
      name: $recordName
    }));
  };
});