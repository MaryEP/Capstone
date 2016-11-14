
function worldMap() {
        var pacific = {lat: 20.289, lng: -157.718};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: pacific,
          mapTypeId: 'satellite'
        });
  
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  
  var contentHawaii = '<div id="contentHawaii">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Hawaii Station</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Hawaii</b>rock formation in the southern part'+
            '</p>'+
            '</div>'+
            '</div>';
  
  var infoWindowHawaii = new google.maps.InfoWindow({
          content: contentHawaii
        });
        var markerHawaii = new google.maps.Marker({
          position: pacific,
          map: map,
          title: 'Hawaii',
          icon: image
        });
        markerHawaii.addListener('click', function() {
          infoWindowHawaii.open(map, markerHawaii);
        }); 
 function show () {
  document.getElementById('title').style.visibility = 'visible';
 }
/////
  var contentSydney = '<div id="contentSydney">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Sydney Station</h1>'+
            '<div id="bodyContent">'+
            '<p><b>add API info here'+
            '</p>'+
            '</div>'+
            '</div>';
  
  var infoWindowSydney = new google.maps.InfoWindow({
          content: contentSydney
        });
  
   var markerSydney = new google.maps.Marker({
       position: {lat: -33.890, lng: 151.274},
       map: map,
       title: 'Sydney',
       icon: image
    });
   markerSydney.addListener('click', function() {
          infoWindowSydney.open(map, markerSydney);
        }); 
  //////
  var contentJapan = '<div id="contentJapan">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Japan Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowJapan = new google.maps.InfoWindow({
          content: contentJapan
        });
  var markerJapan = new google.maps.Marker({                                   
       position: {lat: 35.889, lng: 140.06},
       map: map,
       title: 'Japan',
       icon: image    
        }); 
  markerJapan.addListener('click', function() {
          infoWindowJapan.open(map, markerJapan);
        });
  //////
  var contentPhillipines = '<div id="contentPhillipines">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Phillipines Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowPhillipines = new google.maps.InfoWindow({
          content: contentPhillipines
        });
  var markerPhillipines = new google.maps.Marker({                                   
       position: {lat: 7.710, lng: 126.56},
       map: map,
       title: 'Phillipines',
       icon: image    
        }); 
  markerPhillipines.addListener('click', function() {
          infoWindowPhillipines.open(map, markerPhillipines);
        });
  //////
  var contentNewGuinea = '<div id="contentNewGuinea">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">NewGuinea Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowNewGuinea = new google.maps.InfoWindow({
          content: contentNewGuinea
        });
  var markerNewGuinea = new google.maps.Marker({                                   
       position: {lat: -9.968, lng: 150.117},
       map: map,
       title: 'New Guinea',
       icon: image    
        }); 
  markerNewGuinea.addListener('click', function() {
          infoWindowNewGuinea.open(map, markerNewGuinea);
        });
  //////
  var contentMarshallIslands = '<div id="contentMarshallIslands">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Kwajalein, Marshall Islands Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowMarshallIslands = new google.maps.InfoWindow({
          content: contentMarshallIslands
        });
  var markerMarshallIslands = new google.maps.Marker({                                   
       position: {lat: 9.087396, lng: 167.470312},
       map: map,
       title: 'Kwajalein, Marshall Islands',
       icon: image    
        }); 
  markerMarshallIslands.addListener('click', function() {
          infoWindowMarshallIslands.open(map, markerMarshallIslands);
        });
  //////
 var contentLaPush = '<div id="contentLaPush">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">LaPush Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowLaPush = new google.maps.InfoWindow({
          content: contentLaPush
        });
  var markerLaPush = new google.maps.Marker({                                   
       position: {lat: 47.908, lng: -124.633},
       map: map,
       title: 'LaPush, WA',
       icon: image    
        }); 
  markerLaPush.addListener('click', function() {
          infoWindowLaPush.open(map, markerLaPush);
        });
  //////
  var contentPtReyes = '<div id="contentPtReyes">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Pt. Reyes Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowPtReyes = new google.maps.InfoWindow({
          content: contentPtReyes
        });
  var markerPtReyes = new google.maps.Marker({                                   
       position: {lat: 38.048, lng: -122.926},
       map: map,
       title: 'Pt. Reyes, CA',
       icon: image    
        }); 
  markerPtReyes.addListener('click', function() {
          infoWindowPtReyes.open(map, markerPtReyes);
        });
  //////
  var contentAzores = '<div id="contentAzores">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Azores, Portugal Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowAzores = new google.maps.InfoWindow({
          content: contentAzores
        });
  var markerAzores = new google.maps.Marker({                                   
       position: {lat: 37.753344, lng: -25.686035},
       map: map,
       title: 'Azores, Portugal',
       icon: image    
        }); 
  markerAzores.addListener('click', function() {
          infoWindowAzores.open(map, markerAzores);
        });
  
  //////
  var contentEaster = '<div id="contentEaster">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Rapa Nui/Easter Island, Chile Station</h1>'+
            '<div id="bodyContent">'+
            '<p>add info here'+
            '</p>'+
            '</div>'+
            '</div>';
  var infoWindowEaster = new google.maps.InfoWindow({
          content: contentEaster
        });
  var markerEaster = new google.maps.Marker({                                   
       position: {lat: -27.11299, lng: -109.349581},
       map: map,
       title: 'Rapa Nui/Easter Island, Chile',
       icon: image    
        }); 
  markerEaster.addListener('click', function() {
          infoWindowEaster.open(map, markerEaster);
        });
  
      }

//Dakar, Senegal - Latitude:14.764504°
//Longitude:-17.366029°
