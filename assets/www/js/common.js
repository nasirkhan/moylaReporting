document.addEventListener("deviceready", onDeviceReady, false);
            
function onDeviceReady() {
    firstRunCheck();   
    createWasteCategoryList();
                
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
    if($("#radio-mini-1").is(':checked')){
        gender = "male";
        window.localStorage.setItem("gender", gender);
    }
    else{
        gender = "female";
        window.localStorage.setItem("gender", gender);
    }        
}

function loadRegFormGender(){
    if(window.localStorage.getItem("gender") == "male"){
        $("#radio-mini-1").is(':checked');
    }
    else{
        $("#radio-mini-2").is(':checked')
    }
}

function categoryChecke()
{
    var category_vals=$('input[name=radio-choice-1]:checked').val().split("#");
    categort_id=category_vals[0];
    window.localStorage.setItem("category", category_vals[1]);

}

            
function storeInfo(){
    //    window.location="file:///android_asset/www/index.html#p-reg";
    //    return false;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    genderChecke();
    var messg="";
    familyName = document.getElementById("familyName").value;
    if(!familyName){
        //        alert("please enter family name");
        messg +='Fillup the family name \n';
    //    window.location="file:///android_asset/www/index.html#p-reg";
    }
    window.localStorage.setItem("familyName", familyName);
                
    initials = document.getElementById("initials").value;
    if(!initials){
        //        alert("please enter initials");
        messg +='Fillup initials \n';
    //    window.location="file:///android_asset/www/index.html#p-reg";
    }
    window.localStorage.setItem("initials", initials);
    
    b_year = document.getElementById("b_year").value;
    if(!b_year){
        //        alert("please enter birth year");
        messg +='Fillup birth year \n';
    //    window.location="file:///android_asset/www/index.html#p-reg";
    }
    window.localStorage.setItem("b_year", b_year);
    
    email = document.getElementById("email").value;
    if(!email){
        //        alert("please enter email");
        messg +='Fillup email address \n';
    //    window.location="file:///android_asset/www/index.html#p-reg";
    }
    //    else if(!re.test(email)){
    //        messg +='Invalid email address \n';
    //    }
    window.localStorage.setItem("email", email);
  
    phone = document.getElementById("phone").value;
    if(!phone){
        //        alert("please enter phone number");
        messg +='Fillup phone number \n';
    //    window.location="file:///android_asset/www/index.html#p-reg";
    }
    window.localStorage.setItem("phone", phone);
                
    //    var result = document.getElementById("result");
    //    result.innerHTML = "familyName: " + window.localStorage.getItem("familyName")  + " // ";
    //    result.innerHTML += "prefix: " + window.localStorage.getItem("prefix")  + " // ";
    //    result.innerHTML += "initials: " + window.localStorage.getItem("initials")  + " // ";
    //    result.innerHTML += "gender: " + window.localStorage.getItem("gender")  + " // ";
    //    result.innerHTML += "b_year: " + window.localStorage.getItem("b_year")  + " // ";
    //    result.innerHTML += "email: " + window.localStorage.getItem("email")  + " // ";
    //    result.innerHTML += "phone: " + window.localStorage.getItem("phone")  + " // ";
    
    if(messg == ""){        
        window.location="file:///android_asset/www/index.html";
    }else{
        alert(messg);
        window.location="file:///android_asset/www/index.html#p-reg";
    }
    
//    return false;
}
    
    
function storeAdditionalRemarkText(){
    additional_remark_text = document.getElementById("additional_remark_text").value;
    window.localStorage.setItem("additional_remark_text", additional_remark_text);
}

function manualGeoLocation(){
    var manual_geo_location = document.getElementById("manual_geo_location").value;
    window.localStorage.setItem("location_full_name", manual_geo_location);
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
    loadRegElement.innerHTML = "<label for=\"familyName\" class=\"label_text\">Family Name:</label> ";
    loadRegElement.innerHTML += "<div class=\"input_field\">[</div> <div class=\"float_left\"><input type=\"text\" name=\"familyName\" id=\"familyName\" required value=\"" + window.localStorage.getItem("familyName") + "\" /></div> <div class=\"input_field\">]</div>";  
    loadRegElement.innerHTML += "<label for=\"prefix\" class=\"label_text\">Prefix:</label> ";
    loadRegElement.innerHTML += "<div class=\"input_field\">[</div> <div class=\"float_left\"><input type=\"text\" name=\"prefix\" id=\"prefix\" value=\"" + window.localStorage.getItem("prefix") + "\"/></div> <div class=\"input_field\">]</div>";   
    loadRegElement.innerHTML += "<label for=\"initials\" class=\"label_text\">Initials:</label> ";
    loadRegElement.innerHTML += "<div class=\"input_field\">[</div> <div class=\"float_left\"><input type=\"text\" name=\"initials\" id=\"initials\" value=\"" + window.localStorage.getItem("initials") + "\" /></div><div class=\"input_field\">]</div> ";    
    loadRegElement.innerHTML += "<label for=\"gender-select\" class=\"label_text gender\">Gender:</label>";
    loadRegElement.innerHTML += "<fieldset name=\"gender-select\" data-role=\"controlgroup\" data-mini=\"false\" data-type=\"horizontal\" class=\"gender\">";
    loadRegElement.innerHTML += "<input type=\"radio\" name=\"gender\" id=\"radio-mini-1\" value=\"male\" />";
    loadRegElement.innerHTML += "<label for=\"radio-mini-1\">Male</label>";
    loadRegElement.innerHTML += "<input type=\"radio\" name=\"gender\" id=\"radio-mini-2\" value=\"female\" />";
    loadRegElement.innerHTML += "<label for=\"radio-mini-2\">Female</label></fieldset>";
    loadRegElement.innerHTML += "<label for=\"b_year\" class=\"label_text\">Year of Birth:</label> ";
    loadRegElement.innerHTML += "<div class=\"input_field\">[</div> <div class=\"float_left\"><input type=\"text\" name=\"b_year\" id=\"b_year\" placeholder=\"Enter the Year Only\" value=\"" + window.localStorage.getItem("b_year") + "\" /></div><div class=\"input_field\">]</div>";
    loadRegElement.innerHTML += "<label for=\"email\" class=\"label_text\">Email:</label>";
    loadRegElement.innerHTML += "<div class=\"input_field\">[</div> <div class=\"float_left\"><input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Enter Email Address\" required value=\"" + window.localStorage.getItem("email") + "\" /></div><div class=\"input_field\">]</div>";
    loadRegElement.innerHTML += "<label for=\"phone\" class=\"label_text\">Phone:</label>";
    loadRegElement.innerHTML += "<div class=\"input_field\">[</div> <div class=\"float_left\"><input type=\"text\" name=\"phone\" id=\"phone\" value=\"" + window.localStorage.getItem("phone") + "\" placeholder=\"Enter Phone Number\" /></div><div class=\"input_field\">]</div>";
    loadRegFormGender();
}


function loadSubmitPage(){
    var loadRegElement = document.getElementById("submit_page");
    loadRegElement.innerHTML = "<div class=\"submit_page_main\">";
    loadRegElement.innerHTML += "<div id=\"submit_page\" class=\"submit_page_label\">";
    loadRegElement.innerHTML += "<div class=\"submit_page_section_heading\">Personal Information:</div>";
    loadRegElement.innerHTML += "<label>Family Name: </label>" + window.localStorage.getItem("familyName") + "<br />";
    loadRegElement.innerHTML += "<label>Email: </label>" + window.localStorage.getItem("email") + "<br />";
    loadRegElement.innerHTML += "<div class=\"submit_page_section_heading\">Reporting info:</div>";
    loadRegElement.innerHTML += "<label>Category: </label>" + window.localStorage.getItem("category") + "<br />";
    loadRegElement.innerHTML += "<label>Location: </label>" + window.localStorage.getItem("location_full_name") + "<br />";
    loadRegElement.innerHTML += "<label>Remark: </label>" + window.localStorage.getItem("additional_remark_text") + "<br />";
    loadRegElement.innerHTML += "</div>";
    loadRegElement.innerHTML += "</div>";    
}

function emptyStorage(){
    //getobjectID();
    localStorage.removeItem('location_full_name');
    localStorage.removeItem('category');
    localStorage.removeItem('additional_remark_text');
    
    getobjectID();
}

function createWasteCategoryList(){
    var list="";
    for(var row=0;row<waste_categories.length;++row){
        if(!row){
            list +='<div  class="cat-even" ><input type="radio" name="radio-choice-'+waste_categories[row][0]+'" id="radio-choice-1" value="'+waste_categories[row][0]+'#'+waste_categories[row][1]+'" checked="checked" class="cat-odd" /><label for="radio-choice-'+waste_categories[row][0]+'">'+waste_categories[row][1]+'</label></div>';
        }
        else if(row%2){
            list +='<div  class="cat-odd"><input type="radio" name="radio-choice-1" id="radio-choice-'+waste_categories[row][0]+'" value="'+waste_categories[row][0]+'#'+waste_categories[row][1]+'" /><label for="radio-choice-'+waste_categories[row][0]+'">'+waste_categories[row][1]+'</label></div>';
        }else{
            list +='<div  class="cat-even"><input type="radio" name="radio-choice-1" id="radio-choice-'+waste_categories[row][0]+'" value="'+waste_categories[row][0]+'#'+waste_categories[row][1]+'"/><label for="radio-choice-'+waste_categories[row][0]+'">'+waste_categories[row][1]+'</label></div>';    
        }
    }
    var wasteCategoryList = document.getElementById("waste-cat-list");
    wasteCategoryList.innerHTML= list;
    
}