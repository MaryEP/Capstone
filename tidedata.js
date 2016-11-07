angular.module(capstone)
   .controller('MainCtrl', function($scope, current, $filter) {
 




function getTideData($scope) {
  $scope.location = 'location';
  $scope.highTide = 'HWWT';
  $scope.highTideTime = 'HWWTtime';
  $scope.lowTide = 'LWWT';
  $scope.lowTideTime = 'LWWTtime';
  $scope.waterTemp = 'temp';
}
});