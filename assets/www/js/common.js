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
    else{
        loadRegForm();
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


function loadRegForm(){
    var loadRegElement = document.getElementById("reg_form_input");
    loadRegElement.innerHTML = "<label for=\"familyName\">Family Name:</label>";
    loadRegElement.innerHTML += "<input type=\"text\" name=\"familyName\" id=\"familyName\" required placeholder=\"" + window.localStorage.getItem("familyName") + "\" />";
    loadRegElement.innerHTML += "<label for=\"initials\">Initials:</label>";
    loadRegElement.innerHTML += "<input type=\"text\" name=\"initials\" id=\"initials\" placeholder=\"" + window.localStorage.getItem("initials") + "\"  />";
    loadRegElement.innerHTML += "<label for=\"flip-a\">Gender:</label>  ";
    loadRegElement.innerHTML += "<label for=\"flip-a\">Gender:</label>  ";
    loadRegElement.innerHTML += "<fieldset data-role=\"controlgroup\" data-mini=\"true\"> ";
    loadRegElement.innerHTML += "<input type=\"radio\" name=\"gender\" id=\"radio-mini-1\" value=\"male\" />   ";
    loadRegElement.innerHTML += "<label for=\"radio-mini-1\">Male</label>";
    loadRegElement.innerHTML += "<input type=\"radio\" name=\"gender\" id=\"radio-mini-2\" value=\"female\"  />     ";
    loadRegElement.innerHTML += "<label for=\"radio-mini-2\">Female</label>";
    loadRegElement.innerHTML += "<input type=\"radio\" name=\"gender\" id=\"radio-mini-3\" value=\"other\"  />    ";
    loadRegElement.innerHTML += "<label for=\"radio-mini-3\">Other</label></fieldset>";
    loadRegElement.innerHTML += "<label for=\"b_year\">Year of Birth:</label>";
    loadRegElement.innerHTML += "<input type=\"text\" name=\"b_year\" id=\"b_year\" value=\"\" placeholder=\"" + window.localStorage.getItem("b_year") + "\" />";
    loadRegElement.innerHTML += "<label for=\"email\">Email:</label>";
    loadRegElement.innerHTML += "<input type=\"email\" name=\"email\" id=\"email\" value=\"\" placeholder=\"" + window.localStorage.getItem("email") + "\" required />";
    loadRegElement.innerHTML += "<label for=\"phone\">Phone:</label>";
    loadRegElement.innerHTML += "<input type=\"text\" name=\"phone\" id=\"phone\" value=\"\" placeholder=\"" + window.localStorage.getItem("phone") + "\" />";   
}
