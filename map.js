
function worldMap() {
        var pacific = {lat: 20.289, lng: -157.718};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: pacific
        });
        var marker = new google.maps.Marker({
          position: pacific,
          map: map
        });


  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
   var beachMarkerSydney = new google.maps.Marker({
       position: {lat: -33.890, lng: 151.274},
       map: map,
       label: 'Sydney',
       icon: image
    });
    
  var beachMarkerJapan = new google.maps.Marker({                                   
       position: {lat: 35.889, lng: 140.06},
       map: map,
       icon: image                               
        });
  
  var beachMarkerPhillipines = new google.maps.Marker({                                   
       position: {lat: 7.710, lng: 126.56},
       map: map,
       icon: image                               
        });
  
  var beachMarkerNewGuinea = new google.maps.Marker({                                   
       position: {lat: -9.968, lng: 150.117},
       map: map,
       icon: image                               
        });
  
  var beachMarkerLaPush = new google.maps.Marker({                                   
       position: {lat: 47.908, lng: -124.633},
       map: map,
       label: 'LaPush,WA',
       icon: image                               
        });
  var beachMarkerPtReyes = new google.maps.Marker({                                   
       position: {lat: 38.048, lng: -122.926},
       map: map,
       label: 'Pt.Reyes,CA',
       icon: image                               
        });
  
  
      }