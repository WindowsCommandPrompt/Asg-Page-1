//JAVASCRIPT DOCUMENT FOR ABOUTMEPAGE
function ConfirmationReset(){
  var UserInputReset = confirm("Are you sure you want to clear your responses?");
  if (UserInputReset == true){
    alert("Your responses have been reset.");
    return true; //All input entered will be cleared 
  }
  else {
    return false;  //All input will still remain
  }
}

function ConfirmationSubmit(){
  var UserInputSubmit = confirm("Are you sure you want to submit your responses?");
  if (UserInputSubmit == true){
    alert("Your information has been submitted.");
    return true; //Let's submit that 
  }
  else {
    return false; //Submit that later instead. 
  }
}

function ConfirmationRedirectHomepage(){
  var UserInputHomepage = confirm("Are you sure you want to be redirected back to the homepage?");
  if (UserInputHomepage == true){
    return true; //Let's go
  }
  else{
    return false;//nahh redirect later 
  }
}

function ConfirmationRedirectAboutMe(){
  var UserInputAboutMe = confirm("Are you sure you want to be redirected back to the top of the About Me page?");
  if (UserInputAboutMe == true){
    return true;
  }
  else {
    return false ;
  }
}

function ConfirmationRedirectLearningJourney() {
  var UserInputLearningJourney = confirm("Are you sure you want to be redirected to the 'Learning Journey' page?");
  if (UserInputLearningJourney == true){
    return true;
  } 
  else {
    return false;
  }
}

function ConfirmationRedirectPersonalAchievements(){
  var UserInputPersonalAchievements = confirm("Are you sure you want to be redirected to the 'Personal Achievements' page?");
  if (UserInputPersonalAchievements == true){
    return true;
  }
  else {
    return false;
  }
}

function ConfirmationRedirectPersonalProjects(){
  var UserInputPersonalProjects = confirm("Are you sure you want to be redirected to the 'Personal Projects' page?");
  if (UserInputPersonalProjects == true){
    return true; 
  }
  else {
    return false; 
  }
}

function ConfirmationRedirectContactPage(){
  var UserInputRedirectContactPage = confirm("You are about to be redirected to another page where you will be viewing my CONTACT DETAILS (Contact Card page) Are you sure you want to continue?");
  if (UserInputRedirectContactPage == true){
    return true; 
  }
  else {
    return false;
  }
}

function ConfirmationRedirectLinkedInProfile(){
  var UserInputRedirectLinkedInProfile = confirm("You are about to be redirected to another page where you will be viewing my LinkedIn Profile (Contact Card page) Are you sure you want to continue?");
  if (UserInputRedirectLinkedInProfile == true){
    return true ;
  }
  else {
    return false;
  }
}

function ConfirmationRedirectIGProfile(){
  var UserInputRedirectIGProfile = confirm("You are about to be redirected to another page where you will be viewing my IG Profile (Contact Card page) Are you sure you want to continue?");
  if (UserInputUserInputRedirectIGProfile == true){
    return true; 
  }
  else {
    return false;
  }
}

function openNav() {
  document.getElementById("overlayMenu").style.display = "block";
}

/* Use the closeNav() function to change "collapse" back to "expand" and close the dropdown menu */
function closeNav() {
  document.getElementById("overlayMenu").style.display = "none";

  //reset 
  document.getElementById("deploy").innerHTML = "expand";
  document.getElementById("deploy1").innerHTML = "expand";
  document.getElementById("deploy2").innerHTML = "expand"; 
  document.getElementById("deploy3").innerHTML = "expand"; 
  document.getElementById("MainNavBarOverlay").style.display = "none";  
  document.getElementById("MainNavBarOverlay1").style.display = "none";  
  document.getElementById("MainNavBarOverlay2").style.display = "none";  
  document.getElementById("MainNavBarOverlay3").style.display = "none";  
}

let ScreenWidthChecker = window.matchMedia("(max-width: 1100px)");
ScreenWidthChecker.addListener(Control);

function Control(){
  object = document.getElementById("overlayMenu");
  if (ScreenWidthChecker.matches && object.style.display == "block"){
    object.style.display = "block";
  }
  else {
    object.style.display = "none";

    //reset 
    document.getElementById("deploy").innerHTML = "expand";
    document.getElementById("deploy1").innerHTML = "expand";
    document.getElementById("deploy2").innerHTML = "expand"; 
    document.getElementById("deploy3").innerHTML = "expand"; 
    document.getElementById("MainNavBarOverlay").style.display = "none";  
    document.getElementById("MainNavBarOverlay1").style.display = "none";  
    document.getElementById("MainNavBarOverlay2").style.display = "none";  
    document.getElementById("MainNavBarOverlay3").style.display = "none"; 
  }
}

//get the id of the button 
var button = document.getElementById("deploy")
var navbar = document.getElementById("MainNavBarOverlay")
button.addEventListener("click", function(){
  if (button.innerHTML == "expand"){
    button.innerHTML = "collapse";

    //set the rest of the button's innerHTML text to 'expand' 
    document.getElementById("deploy1").innerHTML = "expand";
    document.getElementById("deploy2").innerHTML = "expand"; 
    document.getElementById("deploy3").innerHTML = "expand"; 
  }
  else{
    button.innerHTML = "expand"
  }
})

button.addEventListener("click", function(){
  if (navbar.style.display == "none"){
    navbar.style.display = "block"

    //close the rest of the dropdowns. 
    document.getElementById("MainNavBarOverlay1").style.display = "none";  
    document.getElementById("MainNavBarOverlay2").style.display = "none";  
    document.getElementById("MainNavBarOverlay3").style.display = "none"; 
  }
  else{
    navbar.style.display = "none"
  }
})


var navbar1 = document.getElementById("MainNavBarOverlay1")
var button1 = document.getElementById("deploy1")
button1.addEventListener("click", function(){
  if (button1.innerHTML == "expand"){
    button1.innerHTML = "collapse"

    document.getElementById("deploy").innerHTML = "expand";
    document.getElementById("deploy2").innerHTML = "expand"; 
    document.getElementById("deploy3").innerHTML = "expand"; 
  }
  else{
    button1.innerHTML = "expand"
  }
})

button1.addEventListener("click", function(){
  if (navbar1.style.display == "none"){
    navbar1.style.display = "block"

    //close the rest of the dropdowns. 
    document.getElementById("MainNavBarOverlay").style.display = "none";  
    document.getElementById("MainNavBarOverlay2").style.display = "none";  
    document.getElementById("MainNavBarOverlay3").style.display = "none"; 
  }
  else{
    navbar1.style.display = "none"
  }
})

var navbar2 = document.getElementById("MainNavBarOverlay2")
var button2 = document.getElementById("deploy2")
button2.addEventListener("click", function(){
  if (button2.innerHTML == "expand"){
    button2.innerHTML = "collapse"

    document.getElementById("deploy").innerHTML = "expand";
    document.getElementById("deploy1").innerHTML = "expand"; 
    document.getElementById("deploy3").innerHTML = "expand"; 
  }
  else{
    button2.innerHTML = "expand"
  }
})

button2.addEventListener("click", function(){
  if (navbar2.style.display == "none"){
    navbar2.style.display = "block"

    //close the rest of the dropdowns. 
    document.getElementById("MainNavBarOverlay").style.display = "none";  
    document.getElementById("MainNavBarOverlay1").style.display = "none";  
    document.getElementById("MainNavBarOverlay3").style.display = "none"; 
  }
  else{
    navbar2.style.display = "none"
  }
})

var navbar3 = document.getElementById("MainNavBarOverlay3") 
var button3 = document.getElementById("deploy3")
button3.addEventListener("click", function(){
  if (button3.innerHTML == "expand"){
    button3.innerHTML = "collapse"

    document.getElementById("deploy").innerHTML = "expand";
    document.getElementById("deploy1").innerHTML = "expand"; 
    document.getElementById("deploy2").innerHTML = "expand"; 
  }
  else{
    button3.innerHTML = "expand"
  }
})

button3.addEventListener("click", function(){
  if (navbar3.style.display == "none"){
    navbar3.style.display = "block"

    //close the rest of the dropdowns. 
    document.getElementById("MainNavBarOverlay").style.display = "none";  
    document.getElementById("MainNavBarOverlay1").style.display = "none";  
    document.getElementById("MainNavBarOverlay2").style.display = "none"; 
  }
  else{
    navbar3.style.display = "none"
  }
})

//js completed 

//Make <aside> go above article

var openNavigationBar = document.getElementById("Draw")
var navigationBar = document.getElementById("Container")
//var asideStretch = document.getElementById("left")

//Hover cursor over the word 'MENU' and then the Navigation Bar will be displayed. 

var closing;

navigationBar.addEventListener("mouseleave", function(){
  closing = setTimeout(function(){
    navigationBar.style.display = "none";
    //asideStretch.style.flex = 0;
  }, 2000);  
})

openNavigationBar.addEventListener("mouseover", function (){
  navigationBar.style.display = "flex";
  //asideStretch.style.flex = 1; 
})

navigationBar.addEventListener("mouseover", function(){
  clearTimeout(closing); 
})





