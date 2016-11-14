//on click on beachMarker, display the tide data
function clickbeachMarker() {
  
}

angular.module('markerLocation')
   .controller('tideCtrl', function($scope, $http, $filter) {
  $scope.highTideTime = $filter('date')(time(),'HH,mm');
  $scope.lowTideTime = $filter('date')(time(),'HH,mm');
  $scope.location = http.query('station.json')
  });
  
  $scope.location.$promise.then(function(display) {
  $scope.location = display;
  })

// on results, "t" = time, "v" = value
  // how to convert the date/time data to time as: 1:16am LT (local time)
  // how to convert the value to find highest and lowest
  
//function getTideData($scope) {
  //$scope.location = 'station';
  //$scope.value = 'find the math.min' and 'math.max'
  //$scope.time = 'on the math.min, find corresponding beginning date time'
 
 // Data wanted:
  //$scope.highTide = 'HWWT';
  //$scope.highTideTime = 'HWWTtime';
  //$scope.lowTide = 'LWWT';
  //$scope.lowTideTime = 'LWWTtime';
  
//}