function getobjectID(imageURI){
	alert("Getting ObjectID");
    //alert(latitude+" "+longtitude);
	$.ajax({
        type: 'POST',
        data: '{"NAME":"faiyaz","PREFIX":"Mr","INITIALS":"SFM","EMAIL":"faiyaz@asd.com","PHONE_NUMBER":"013-1234567","GENDER":"V","BIRTHYEAR":"1984","INCIDENT_CODE":"2","REMARK":"test using phonegap","MUNICIPALITY":"Tilburg","GPS_LATITUDE":"'+latitude+'","GPS_LONGITUDE":"'+longtitude+'"}',
        url: 'http://services.terbit.nl:2357/TWMSService/Report',
        cache: false,
        contentType: 'application/json;charset=utf-8',
		dataType: 'json',
        success: function(data){
            objectId=data;
            alert(objectId);
	    uploadPhoto(objectId,imageURI);
            
        },
        error: function(data){
            alert(data);
            alert('There was an error adding your comment');
        }
    });
 
    return false;
}
