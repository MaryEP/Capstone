//init ajax request or json
//set callback to build stationMarker(API data, station info) when data comes back
//var noaaAPI="http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=11/17/2016 01:06&end_date=11/17/2016 23:56&station=9449880&product=predictions&datum=MLLW&datum=MHHW&units=english&time_zone=gmt&application=seattleuniversity&format=json";

var stationList = [
     [1612404, "Hawaii", latLng = (20.289, -157.718)], 
     [9442396, "LaPush", latLng = (47.908, -124.633)],
     [1630000, "Guam", latLng = (35.889, 140.06)], 
     ];

function loadContent() {
$.ajax({
  url:'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=11/17/2016 01:06&end_date=11/17/2016 23:56&station=9449880&product=predictions&datum=MLLW&datum=MHHW&units=english&time_zone=gmt&application=seattleuniversity&format=json',
  jsonCallback:'jsonReturnData',
  dataType:'jsonp',
  data: {
	  startDate: '11/17/2016',
    endDate: '11/17/2016',
    format: 'json'
    },
success: function(response) {
console.log(response);
} //success
}); 

loadContent();
} 

 function worldMap() { 
        var pacific = {lat: 20.289, lng: -157.718};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: pacific,
          mapTypeId: 'satellite'
        })
  
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  
      map.addListener('click', function(m) {
          placeMarker(m.latLng, map);
        })
      }
      function placeMarker(latLng, map) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: [],
          icon: image
        })
        
  for (var i=0; i<stationList.length; i++); 
   
 //set up info window
 var content = '<div id="content">'+'</div>';
    
 function displayData(marker, data) {
        var infowindow = new google.maps.InfoWindow({
          content: data
        })

  marker.addListener('click', function() {
          infowindow.open(marker.get('map'), marker);
        })
      }
      }

 
