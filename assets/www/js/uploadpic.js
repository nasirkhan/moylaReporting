function uploadPic(objectID){
    for(var i=0;i<image_count;i++){
        //var imgName = 'tiger.jpg';
        imgName=images[i].substr(images[i].lastIndexOf('/')+1);
        alert("img name:"+images[i]);
//        var options = new Array();
        var upload_url="http://services.terbit.nl:2357/TWMSService/upload?token="+objectID+"&filenaam="+imgName;
        alert(upload_url);
        
//        var ft = new FileTransfer();
//        ft.upload(images[i], upload_url, picUploadSuccess, picUploadFailed, options);
        var params = {image: images[i]};
        $.post(upload_url, params, function(data) {				
				alert("Done");				
			});
    }
    
    
}
function uploadPicPHP(report_id){
            //alert("http://www.moila.itechfair.com/index.php/upload/"+report_id);
	            for(var i=0;i<image_count;i++){
	            alert(images[i]);
	            var options = new FileUploadOptions();
	            options.fileKey="file";
	            options.fileName=images[i].substr(images[i].lastIndexOf('/')+1);
	            options.mimeType="image/jpeg";
	 
	            var params = new Object();
	            params.value1 = "test";
	            params.value2 = "param";
	 
	            options.params = params;
	            options.chunkedMode = false;
	 
	            var ft = new FileTransfer();
	            ft.upload(images[i], "http://www.moila.nasirkhan.co.cc/index.php/upload/save/"+report_id, picUploadSuccess, picUploadFailed, options);
            }
            return true;


}

function picUploadSuccess(){
    alert("Upload Done");
}
function picUploadFailed(){
    alert("Upload failed!!");
}


