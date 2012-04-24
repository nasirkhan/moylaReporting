var latitude;
var longitude;
var mapcoordain;

// onSuccess Geolocation
//
function onGPSSuccess(position) {
    //        var element = document.getElementById('geolocation');
    /*alert('Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />'
                        );
                */
    latitude=position.coords.latitude.toString();
    longitude=position.coords.longitude.toString();
    mapcoordain = latitude+','+longitude;
    //          alert(mapcoordain);
    showMap();
    latitude=latitude.replace(".", ",");
    longitude=longitude.replace(".", ",");
//          document.getElementById('geo-locaion').innerHTML="<h4>Your Current Location</h4>"+mapcoordain.toString();//Latitude: "+latitude+"<br>Longtitude: "+longtitude;
         
          
          
}

// onError Callback receives a PositionError object
//
function onGPSError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
    document.getElementById('geo-locaion').innerHTML="Unable to get your current location!!";
}
    
function showMap(){
   // alert(" map474");
    $(function() { 
        demo.add(function() {
            $('#map_canvas').gmap({
                'center': mapcoordain, 
                'zoom': 16, 
                'disableDefaultUI':true, 
                'callback': function() {
                    var self = this;
                    self.addMarker({
                        'position': this.get('map').getCenter()
                    }).click(function() {
                        self.openInfoWindow({
                            'content': 'Your Current Location'
                        }, this);
                    });	
                }
            });
        }).load();
    });
           
}
 
//http://stackoverflow.com/questions/6797569/html5-geolocation-easiest-way-to-get-city-name