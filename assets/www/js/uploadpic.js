function uploadPic(report_id){
    for(var i=0;i<image_count;i++){
        imgName=images[i].substr(images[i].lastIndexOf('/')+1);
        var options = new Array();
        options.fileKey="file";
        options.fileName=images[i].substr(images[i].lastIndexOf('/')+1);
	  	options.mimeType="image/jpeg";
        var upload_url="http://services.terbit.nl:2357/TWMSService/upload?token="+report_id+"&filenaam="+imgName+".jpg";
        console.log(upload_url);
        
       var ft = new FileTransfer();
       ft.upload(images[i], upload_url, picUploadSuccess, picUploadFailed, options);
    }   
}
function picUploadSuccess(){
    var reportStatus = document.getElementById("report-submit-status");
    reportStatus.innerHTML = "<h4>Reported Successfuly. Report Id is "+report_id+". Use it for further reference.</h4>";
}
function picUploadFailed(){
    var reportStatus = document.getElementById("report-submit-status");
    reportStatus.innerHTML = "<h4>Failed!! Please Try Again.</h4>";
}


