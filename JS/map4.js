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
  ['Hawaii', 20.289, -157.718, id=1612404, 5],
  ['La Push', 47.908, -124.633, id=9442396, 4],
  ['Pt. Reyes', 38.048,  -122.926, id=1630000, title="Pt Reyes", 3],
  ['Sydney', -33.890, 151.274, id=777 , title="Sydney", 2],
  ['Japan',  35.889, 140.06, id = 888, title="Japan", 1]
  ];

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
           position: {lat: station[1], lng: station[2]},
           map: map,
          icon: image,
           shape: shape,
           title: station[0],
           zIndex: station[3]
         });
         
         
    var contentString = '<div id="content">'+
     '<h1 id="firstHeading" class="firstHeading">Station Name</h1>'+
       '<div id="bodyContent">'+
      '</div>'+
      '</div>';   
         
   var infowindow = new google.maps.InfoWindow({
   content: contentString
 });   
         
    marker.addListener('click', function() {
   infowindow.open(map, marker);
  });     
            
  }
  }
 /*
  var contentString = '<div id="content">'+
     '<h1 id="firstHeading" class="firstHeading">Station Name</h1>'+
       '<div id="bodyContent">'+
      '</div>'+
      '</div>';

 var infowindow = new google.maps.InfoWindow({
   content: contentString
 });
   
  
  marker.addListener('click', function() {
   infowindow.open(map, marker);
  });
     */
  
 
// function show () {
//  document.getElementById('title').style.visibility = 'visible'


