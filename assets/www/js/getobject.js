function getobjectID(){
	alert("Getting ObjectID");
    alert(latitude_gps+"##"+longitude_gps);
//$.ajax({
//        type: 'POST',
//        data: '{"NAME":"'+window.localStorage.getItem("familyName")+'","PREFIX":"Mr","INITIALS":"SFM","EMAIL":"'+window.localStorage.getItem("email")+'","PHONE_NUMBER":"'+window.localStorage.getItem("phone")+'","GENDER":"V","BIRTHYEAR":"1984","INCIDENT_CODE":"2","REMARK":"test using phonegap","MUNICIPALITY":"Tilburg","GPS_LATITUDE":"23,1232212","GPS_LONGITUDE":"12,43433443"}',
//        url: 'http://services.terbit.nl:2357/TWMSService/Report',
//        cache: false,
//        contentType: 'application/json;charset=utf-8',
//	dataType: 'json',
//        success: function(data){
//            objectId=data;
//            alert(objectId);
//	    uploadPic(objectId);
//            
//        },
//        error: function(data){
//            alert(data);
//            alert('There was an error adding your comment');
//        }
//    });
  $.post("http://www.moila.nasirkhan.co.cc/index.php/report", {name:window.localStorage.getItem("familyName"),email: window.localStorage.getItem("email"),address:location_full_name.toString(),contact:window.localStorage.getItem("phone"),latitude:latitude_gps.toString(),longitude:longitude_gps.toString()},function(data) {
                alert(data);
               if(uploadPicPHP(data)){
                   return true;
               }
                });
   return false;
}
