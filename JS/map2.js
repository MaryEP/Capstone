//1. provide station list
//2. init world map
//3. for loop of station list and init ajax request 
//4. set callback to build stationMarker(API data, station info) when data comes back
//5. function build station marker, draw marker, set up info window
//var noaaAPI="http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=11/17/2016 01:06&end_date=11/17/2016 23:56&station=9449880&product=predictions&datum=MLLW&datum=MHHW&units=english&time_zone=gmt&application=seattleuniversity&format=json";

var stationList = [
     [1612404, "Hawaii", latLng = (20.289, -157.718)], 
     [9442396, "LaPush", latLng = (47.908, -124.633)],
     [1630000, "Guam", latLng = (35.889, 140.06)], 
     ];

function worldMap() { 
        var pacific = {lat: 20.289, lng: -157.718};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: pacific,
          mapTypeId: 'satellite'
        })
				}
				
function loadContent() {
	for (var i=0; i <stationList.length; i++) {
$.ajax({
  url:'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=11/17/2016 01:06&end_date=11/17/2016 23:56&station=9449880&product=predictions&datum=MLLW&datum=MHHW&units=english&time_zone=gmt&application=seattleuniversity&format=json',
  jsonCallback:'jsonReturnData',
  dataType:'jsonp',
  data: {
	  stationID: 1612404,
		startDate: '11/17/2016',
    endDate: '11/17/2016',
    format: 'json'
    },
success: function(response) {
console.log(response);
} 
}); 
loadContent();
} 
}

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  
      function placeMarker(stationList, image) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: [],
          icon: image
        })
				map.addListener('click', function(map) {
          placeMarker(map.latLng);
			})
        
 //set up info window
 var content = '<div id="content">'+'</div>';
    
 function displayData(marker, data) {
        var infowindow = new google.maps.InfoWindow({
					data: content
        })

  marker.addListener('click', function(infowindow) {
          infowindow.open(marker.get('map'), marker);
        });
      }
      }

 
