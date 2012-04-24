var familyName;
var initials;
var gender;
var b_year;
var email;
var phone;
           
document.addEventListener("deviceready", onDeviceReady, false);
            
function onDeviceReady() {
    firstRunCheck();   
                
}

function firstRunCheck(){
    firstRun=window.localStorage.getItem("familyName");
    if (firstRun==null){
        window.open('#p-reg');        
    }
}
function genderChecke()
{
    for (var i=0; i < document.reg.gender.length; i++)
    {
        if (document.reg.gender[i].checked)
        {
            gender = document.reg.gender[i].value;
            window.localStorage.setItem("gender", gender);
        }
    }
}

            
function storeInfo(){
    genderChecke();
    familyName = document.getElementById("familyName").value;
    window.localStorage.setItem("familyName", familyName);
                
    initials = document.getElementById("initials").value;
    window.localStorage.setItem("initials", initials);
    
    b_year = document.getElementById("b_year").value;
    window.localStorage.setItem("b_year", b_year);
    
    email = document.getElementById("email").value;
    window.localStorage.setItem("email", email);
    
    phone = document.getElementById("phone").value;
    window.localStorage.setItem("phone", phone);
    
    //phone = document.getElementById("phone").value;
    
                
                
    var result = document.getElementById("result");
    result.innerHTML = "familyName: " + window.localStorage.getItem("familyName")  + " // ";
    result.innerHTML += "initials: " + window.localStorage.getItem("initials")  + " // ";
    result.innerHTML += "gender: " + window.localStorage.getItem("gender")  + " // ";
    result.innerHTML += "initials: " + window.localStorage.getItem("b_year")  + " // ";
    result.innerHTML += "initials: " + window.localStorage.getItem("email")  + " // ";
    result.innerHTML += "initials: " + window.localStorage.getItem("phone")  + " // ";
    
    
    return false;
}
            
function showInfo(){
                
    
    var result = document.getElementById("result");
    result.innerHTML = "familyName: " + window.localStorage.getItem("familyName")  + " // ";
//    result.innerHTML += "initials: " + window.localStorage.getItem("initials")  + " // ";
//    result.innerHTML += "gender: " + window.localStorage.getItem("gender")  + " // ";
//    result.innerHTML += "initials: " + window.localStorage.getItem("b_year")  + " // ";
//    result.innerHTML += "initials: " + window.localStorage.getItem("email")  + " // ";
//    result.innerHTML += "initials: " + window.localStorage.getItem("phone")  + " // ";
    
    return false;
}


