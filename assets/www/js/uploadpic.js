function uploadPic(imageUri){
    var imgName = 'tiger.jpg';
    var options = new Array();
    var upload_url="http://services.terbit.nl:2357/TWMSService/upload?token=715&filenaam="+imgName;
    alert(upload_url);
    var ft = new FileTransfer();
    ft.upload(imageUri, upload_url, picUploadSuccess, picUploadFailed, options);
    
    
}

function picUploadSuccess(){
    alert("Upload Done");
}
function picUploadFailed(){
    alert("Upload failed!!");
}


