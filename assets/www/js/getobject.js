var report_id;
function getobjectID(){
//	if(!latitude_gps){
//		latitude_gps="23,765689";
//    }
//	if(!longitude_gps){
//    	longitude_gps="90,357399";
//    }
   var param='{"NAME":"'+familyName+'","PREFIX":"'+prefix+'","INITIALS":"'+initials+'","EMAIL":"'+email+'","PHONE_NUMBER":"'+phone+'","GENDER":"V","BIRTHYEAR":"'+b_year+'","INCIDENT_CODE":"'+categort_id+'","REMARK":"'+additional_remark_text+'","MUNICIPALITY":"'+location_full_name+'","GPS_LATITUDE":"'+latitude_gps.toString()+'","GPS_LONGITUDE":"'+longitude_gps.toString()+'"}';
   console.log(param);
//    $.ajax({
//        type: 'POST',
//        data: param,
//        url: 'http://services.terbit.nl:2357/TWMSService/Report',
//        cache: false,
//        contentType: 'application/json;charset=utf-8',
//	dataType: 'json',
//        success: function(data){
//            report_id=data;
//        console.log(report_id);
//	    uploadPic(report_id);
//            
//        },
//        error: function(data){
//            console.log("Server connection failed:"+data);
//            alert('Could not connect to the remote server');
//        }
//    });

   return false;
}
