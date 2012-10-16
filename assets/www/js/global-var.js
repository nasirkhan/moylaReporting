/*
 *Application level Variable
 */
var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
/*
 *form variables
 */
var familyName;
var prefix;
var initials;
var gender;
var b_year;
var email;
var phone;
var location_full_name;     
var additional_remark_text;

var categort_id;

/*
 * Picture Storage
 */
var images=new Array(); //to store multiple images
var image_count=0;

/*
 * Waste Categories
 */
var waste_categories=[
    ['20','Storing'],
    ['21','Schade'],
    ['61','Beschadiging aan gemeentelijke objecten'],
    ['62','Zwerfvuil'],
    ['63','Zinloos geweld'],
    ['64','Openbare vechtpartij'],
    ['65','Auto ongeluk'],
    ['66','Fiets ongeluk'],
    ['67','Aanrijding'],
    ['68','Openbare dronkenschap'],
    ['69','Overige geweldmisdrijf'],
    ['70','Inbraak'],
    ['71','Overige melding'],
];
