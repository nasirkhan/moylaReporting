 		function watchLocation(){
 		document.addEventListener("deviceready", onDeviceReady, false);
 		}

    var watchID = null;

    // PhoneGap is ready
    //
    function onDeviceReady() {
        // Update every 3 seconds
        var options = { frequency: 3000 };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
