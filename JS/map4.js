function worldMap() {
        var pacific = {lat: 20.289, lng: -157.718};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: pacific,
          mapTypeId: 'satellite'
        });
      
        setMarkers(map); 
}

  var stations = [ 
  {name: 'Honolulu, HI', lat: 20.289, lng: -157.718, id: 1612340, zIndex: 5},
  {name: 'La Push, WA', lat: 47.908, lng: -124.633, id: 9442396, zIndex: 4},
  {name: 'Pt. Reyes, CA', lat: 38.048, lng: -122.926, id:1630000, zIndex: 3},
  {name: 'Sydney, AU', lat: -33.890, lng: 151.274, id:1619910,  zIndex: 2},
  {name: 'Cedar Key, FL',  lat: 29.13857, lng: -83.03512, id: 8727520, zIndex: 1},
	{name: 'Diego Garcia, UK', lat:-7.3195, lng: 72.422856, id: 2431000, zIndex: 6},
  {name: 'Phipps Pt, ME', lat:43.899247, lng: -69.74421, id: 2431000, zIndex: 7},
	{name: 'The Battery, NY', lat:40.705261, lng: -74.01397, id: 8518750, zIndex: 8},
	{name: 'Astoria, OR', lat:46.187884, lng: -123.8313, id: 9439040, zIndex: 9},
	{name: 'Wake Island, Pacific Ocean', lat: 15.617828, lng: -171.5158, id:1890000, zIndex:10},
	{name: 'Azores, PT', lat:37.741249, lng: -25.67559, id: 2627000, zIndex: 11},
	{name: 'Adak Island, AK', lat: 51.761587, lng: 176.62175, id: 9461710, zIndex: 12},
	{name: 'St Georges Island, BM', lat:32.366862, lng: -64.68365, id: 2695540, zIndex: 13}
		
  ];

function getTideData(marker, station){
  console.log("Getting Tide Data");
  var contentString = '<div class="content" id="' + station.id + '">'+
         '<h1 id="firstHeading" class="firstHeading">Loading station data...</h1>'+ 
         '<div class="bodyContent">'+
        '</div>'+
       '</div>';   
        
        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200, 
          });  
           
  
        // Click event for each individual marker & get data from NOAA
        google.maps.event.addListener(marker, "click", function(){
         $.get('https://getCORS.com/https://tidesandcurrents.noaa.gov/api/datagetter?date=today&station=' + station.id +'&product=predictions&datum=MLLW&datum=MHHW&units=english&time_zone=lst&application=seattleuniversity&format=json', 
           //  'http://crossorigin.me/                     
               function( data ) {
          infowindow.open(map, marker);
          $( "#" +station.id ).html( data );
          console.log( "Load was performed." );   
           
           
         //from array data, find the high and low values and replace content //
          var max = Math.max(); 
          var min = Math.min();
          for (var i = 0; i < content.length; i++) { 
           if (content[i] > max) {
	          max = content[i];
            }
						return max[i]
						
          if(content[i] < min) {
          	min = content[i];
         }
						return min[i]
        }
           
        });
});  
}

  function setMarkers(map) {
  
    var image = {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          size: new google.maps.Size(20, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        };
        
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
    
       for (var i = 0; i < stations.length; i++) {
        var station = stations[i];
        var marker = new google.maps.Marker({
           position: {lat: station.lat, lng: station.lng},
           map: map,
           icon: image,
           shape: shape,
           title: station.name,
           zIndex: station.zIndex
         });
         
         getTideData (marker,station); 
         
  }
  }


