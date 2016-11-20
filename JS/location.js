//on click of Marker, display the tide data: High Tide in feet, Low Tide in feet, Time of High Tide, Time of Low Tide

function clickMarker() {
  
  function getMaxOfArray(highTide) {  
  return Math.max.apply(null, highTide);
}
function getMinOfArray(lowTide) {
  return Math.min.apply(null, lowTide);
}
}

angular.module('markerLocation')

  markerLocation.controller('tideCtrl', function($scope, $http, $filter) {
    
    
    
    
    
    
  $scope.highTideTime = $filter('date')(time(),'HH,mm');
  $scope.lowTideTime = $filter('date')(time(),'HH,mm');
  $scope.location = http.query('station.json')
  });
  
  $scope.location.$promise.then(function(display) {
  $scope.highTide = display;
  })


  
  

  //  "t" = time, "v" = value
  //example of data returned is: {"t":"2016-11-10 01:12", "v":"3.977"},
  
  
// highTide {return Math.max(var "v", Math.max));}
// lowTide {return Math.min(var "v", Math.min));}
  
