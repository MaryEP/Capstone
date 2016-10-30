
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
}

// the below will add markers for stations
  //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
     //   var beachMarker = new google.maps.Marker({
       //   position: {lat: -33.890, lng: 151.274},
       //   map: map,
        //  icon: image
    //  });

 