//JAVASCRIPT DOCUMENT FOR PERSONAL PROJECTS PAGE 
//This function needs to be present in all 
function ConfirmationReset(){
  var UserInputReset = confirm("Are you sure you want to clear your responses?");
  if (UserInputReset == true){
    alert("Your responses have been reset.")
    return true; //All input entered will be cleared 
  }
  else {
    return false;  //All input will still remain
  }
}

function ConfirmationSubmit(){
  var UserInputSubmit = confirm("Are you sure you want to submit your responses?");
  if (UserInputSubmit == true){
    alert("Your information has been submitted.")
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

//To contact card
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
    button.innerHTML = "collapse"

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

    //set the rest of the button's innerHTML text to 'expand' 
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

    //set the rest of the button's innerHTML text to 'expand' 
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

    //set the rest of the button's innerHTML text to 'expand' 
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

var buttonEnlarge1 = document.getElementById("enlarge"); 
var targetImage1 = document.getElementById
("ShowImage"); 
var closeButton1 = document.getElementById("closeImage")
buttonEnlarge1.addEventListener("click", function(){
  if (targetImage1.style.display == "none"){
    targetImage1.style.display = "block"
  }
  else {
    targetImage1.style.display = "none"
  }
})

closeButton1.addEventListener("click", function(){
  if (targetImage1.style.display == "block"){
    targetImage1.style.display = "none"
  }
  else {
    targetImage1.style.display = "block"
  }
})

var buttonEnlarge2 = document.getElementById("enlarge1");
var closeButton2 = document.getElementById("closeImage1")
var targetImage2 = document.getElementById("ShowImage1")
buttonEnlarge2.addEventListener("click", function(){
  if (targetImage2.style.display == "none"){
    targetImage2.style.display = "block"
  }
  else {
    targetImage2.style.display = "none"
  }
})

closeButton2.addEventListener("click", function(){
  if (targetImage2.style.display == "block"){
    targetImage2.style.display = "none"
  }
  else {
    targetImage2.style.display = "block"
  }
})

//3rd image// 
var buttonEnlarge3 = document.getElementById("enlarge2");
var closeButton3 = document.getElementById("closeImage2")
var targetImage3 = document.getElementById("ShowImage2")
buttonEnlarge3.addEventListener("click", function(){
  if (targetImage3.style.display == "none"){
    targetImage3.style.display = "block"
  }
  else {
    targetImage3.style.display = "none"
  }
})

closeButton3.addEventListener("click", function(){
  if (targetImage3.style.display == "block"){
    targetImage3.style.display = "none"
  }
  else {
    targetImage3.style.display = "block"
  }
})

var buttonEnlarge4 = document.getElementById("enlarge3");
var closeButton4 = document.getElementById("closeImage3")
var targetImage4 = document.getElementById("ShowImage3")
buttonEnlarge4.addEventListener("click", function(){
  if (targetImage4.style.display == "none"){
    targetImage4.style.display = "block"
  }
  else {
    targetImage4.style.display = "none"
  }
})

closeButton4.addEventListener("click", function(){
  if (targetImage4.style.display == "block"){
    targetImage4.style.display = "none"
  }
  else {
    targetImage4.style.display = "block"
  }
})



//js completed 


var openNavigationBar = document.getElementById("Draw")
var navigationBar = document.getElementById("Container")
//var asideStretch = document.getElementById("left")

var closing;

//Hover cursor over the word 'MENU' and then the Navigation Bar will be displayed. 
openNavigationBar.addEventListener("mouseover", function(){
  navigationBar.style.display = "flex";
  //asideStretch.style.flex = 1; 
})

navigationBar.addEventListener("mouseleave", function(){
  closing = setTimeout(function(){
    navigationBar.style.display = "none";
    //asideStretch.style.flex = 0;
  }, 2000); 
})

navigationBar.addEventListener("mouseover", function(){
  clearTimeout(closing); 
})

//if the navigationBar is not open, then stretch the article. Hide 

var enlargedImage = document.getElementById("ShowImage");
var enlargedImage1 = document.getElementById("ShowImage1");
var enlargedImage2 = document.getElementById("ShowImage2"); 
var enlargedImage3 = document.getElementById("ShowImage3"); 

ScreenWidthChecker.addListener(Control1);
ScreenWidthChecker.addListener(Control2); 
ScreenWidthChecker.addListener(Control3);
ScreenWidthChecker.addListener(Control4);

function Control1(){
  if (ScreenWidthChecker.matches && enlargedImage.style.display == "block"){
    enlargedImage.style.display = "none";
  }
}

function Control2(){
  if (ScreenWidthChecker.matches && enlargedImage1.style.display == "block"){
    enlargedImage1.style.display = "none";
  }
}

function Control3(){
  if (ScreenWidthChecker.matches && enlargedImage2.style.display == "block"){
    enlargedImage2.style.display = "none";
  }
}

function Control4(){
  if (ScreenWidthChecker.matches && enlargedImage3.style.display == "block"){
    enlargedImage3.style.display = "none";
  }
}

let newMinWidth = window.matchMedia("(min-width: 700px)");
ScreenWidthChecker.addListener(DisableEnlargeImage);
newMinWidth.addListener(DisableEnlargeImage);  

window.addEventListener("load", (event) => {
  if (ScreenWidthChecker.matches){ //if width less than 1100px
    buttonEnlarge1.disabled = true;
    buttonEnlarge1.style.opacity = 0.5;
    buttonEnlarge1.style.cursor = "not-allowed"
    buttonEnlarge2.disabled = true;
    buttonEnlarge2.style.opacity = 0.5;
    buttonEnlarge2.style.cursor = "not-allowed"
    buttonEnlarge3.disabled = true;
    buttonEnlarge3.style.opacity = 0.5;
    buttonEnlarge3.style.cursor = "not-allowed"
    buttonEnlarge4.disabled = true;
    buttonEnlarge4.style.opacity = 0.5;
    buttonEnlarge4.style.cursor = "not-allowed"
  }
  else { //re enable buttons if width less than 700px
    buttonEnlarge1.disabled = false;
    buttonEnlarge1.style.opacity = 1;
    buttonEnlarge1.style.cursor = "pointer";
    buttonEnlarge2.disabled = false;
    buttonEnlarge2.style.opacity = 1;
    buttonEnlarge2.style.cursor = "pointer";
    buttonEnlarge3.disabled = false;
    buttonEnlarge3.style.opacity = 1;
    buttonEnlarge3.style.cursor = "pointer";
    buttonEnlarge4.disabled = false;
    buttonEnlarge4.style.opacity = 1;
    buttonEnlarge4.style.cursor = "pointer";
  }
})

function DisableEnlargeImage() {
  if (ScreenWidthChecker.matches){
    buttonEnlarge1.disabled = true;
    buttonEnlarge1.style.opacity = 0.5;
    buttonEnlarge1.style.cursor = "not-allowed"
    buttonEnlarge2.disabled = true;
    buttonEnlarge2.style.opacity = 0.5;
    buttonEnlarge2.style.cursor = "not-allowed"
    buttonEnlarge3.disabled = true;
    buttonEnlarge3.style.opacity = 0.5;
    buttonEnlarge3.style.cursor = "not-allowed"
    buttonEnlarge4.disabled = true;
    buttonEnlarge4.style.opacity = 0.5;
    buttonEnlarge4.style.cursor = "not-allowed"
    buttonEnlarge5.disabled = true;
  }
  else {
    buttonEnlarge1.disabled = false;
    buttonEnlarge1.style.opacity = 1;
    buttonEnlarge1.style.cursor = "pointer";
    buttonEnlarge2.disabled = false;
    buttonEnlarge2.style.opacity = 1;
    buttonEnlarge2.style.cursor = "pointer";
    buttonEnlarge3.disabled = false;
    buttonEnlarge3.style.opacity = 1;
    buttonEnlarge3.style.cursor = "pointer";
    buttonEnlarge4.disabled = false;
    buttonEnlarge4.style.opacity = 1;
    buttonEnlarge4.style.cursor = "pointer";
  }
}