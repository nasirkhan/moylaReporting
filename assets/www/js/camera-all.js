var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var images=new Array(); //to store multiple images
var image_count=0;
 
 
 

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
    $('#h_link').removeClass('ui-disabled');  
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);
      
    // Get image handle
    //
    var smallImage = document.getElementById('smallImage');

    // Unhide image elements
    //
    smallImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage.src = imageData;
      
    //store iamge path into array
    images[image_count++]=imageData;
      
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the image file URI 
      
    alert(imageURI);
    // Get image handle
    //
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    //
    largeImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //      alert(largeImage.toString());
    //      alert(images);
    largeImage.src = imageURI;
    //store image path into array
    images[image_count++]=imageURI;
    document.getElementById('image-count').innerHTML +='<p>'+(image_count)+'</p>';
     
}
function onPhotoURISuccessMultiple(imageURI) {
    // Uncomment to view the image file URI 
    // console.log(imageURI);

    // Get image handle
    //      alert('<img style="display:block;width:60px;height:60px;" src='+imageURI+'/>');
    images[image_count++]=imageURI;
    document.getElementById('gallery-image').innerHTML += '<div id=img-"'+image_count+'"><img style="display:block;width:60px;height:60px; float:left; padding-right:5px;" src="'+imageURI+'" /></div>';
    document.getElementById('image-count').innerHTML =images.toString();
      
      
      
}
    

// A button will call this function
//
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50
    });
}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20, 
        allowEdit: true
    }); 
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccessMultiple, onFail, {
        quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}

// Called if something bad happens.
// 
function onFail(message) {
    alert('Failed because: ' + message);
}