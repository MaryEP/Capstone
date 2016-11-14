angular.module(tideData)
   .controller('tideCtrl', function($scope, current, $filter) {
 
var location = $resource('location.json');
  $scope.locations = locations.query();
  $scope.locations.$promise.then(function(result) {
    $scope.locations = result;
  })



function getTideData($scope) {
  $scope.location = 'location';
  $scope.highTide = 'HWWT';
  $scope.highTideTime = 'HWWTtime';
  $scope.lowTide = 'LWWT';
  $scope.lowTideTime = 'LWWTtime';
  $scope.waterTemp = 'temp';
}
});