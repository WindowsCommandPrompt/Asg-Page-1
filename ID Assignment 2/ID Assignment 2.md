**Last updated: 22 January 2022 10:49PM** 

## TABLE OF CONTENTS 
<ul> 
  <li> Project Name </li> 
  <li> Design rationale </li> 
  <li> Functions (How to use this website) </li> 
  <li> List of bugs fixed + how does this bug impact normal functionality of the website as a whole </li> 
  <li> Technology used </li> 
  <li> Testing </li> 
  <li> Acknowledgements </li> 
</ul> 

<br>
<hr> 
<br>

## Project Name 

**Name: ** The boardgame of a corrupt city   
(sounds weird but yea)

<br> 
<hr> 
<br> 

## Design Rationale
<p align = "justify">
  Tried to create two different types of games. One game is the board game whereas the other game is the ( ) 
</p> 
<br> 
<p align = "justify"> 
  The purpose of the board game is to teach people how to make wise decisions in life. Think before doing anything. The board game consists of various traps that the player may fall into with the introduction of the all new "Mystery tiles" <b>(refer to image below)</b> 
</p>

<p align = "center"> 
  <img src = "https://static.wixstatic.com/media/3e6e93_0264d9da423e4225a561c0873345769f~mv2.png" width = "300px">
  <br> 
  <small><b>An example of a mystery tile</b></small> 
</p> 


<br> 
<hr> 
<br> 

## Technologies used

<ul> 
  <li id = "IncreaseSize"> jQuery </li>
    <ol> 
      <li> <b> In terms of syntax, </b> </li> 
        <ol> 
          <li align = "justify"> jQuery syntax can be easily understood within a shorter period of time, through high code readability. DOM Manipulation would be easier with the help of jQuery, such as introducing new DOM elements, with the help of in-built jQuery functions such as <code>before()</code>, <code>after()</code>, and updating existing DOM elements such as <code>append()</code>, <code>html()</code>, <code>text()</code>, and changing CSS directly in a single JavaScript file without have to toggle between a CSS file and a JS file. I can just simply use <code>css()</code> to update css when needed, etc. DOM Navigation has also been made easier with the help of jQuery. In-built methods would include <code>children()</code>, <code>parent()</code>, <code>previous()</code>, and <code>next()</code>. Developers like me would be able to get more out of JavaScript through writing less code with the help of jQuery Even though, the code that you have written in jQuery would later be coverted in JavaScript, which results in a longer compiling time.</li> 
          <br>
          <br> 
          <li align = "justify"> In traditional JavaScript, to send to and receive data from a server VIA a server request, we will have to use <code>XMLHttpRequest</code>, which may seem more complicated as compared to <code>jQuery.ajax()</code> in jQuery. Making ajax calls is just so much easier as compared to <code>XMLHttpRequest</code>.</li> 
          <br>
          <br> 
          <li align = "justify"> <code>jQuery(document).ready(function(){ }); </code> makes it easier for me to insert a loading animation while the website is still loading.</li> 
        </ol>
      <br>  
      <li align = "justify"> <b> You will learn traditional JavaScript faster through jQuery.</b> </li>
        <ol>
          <li align = "justify"> Previously it took me a while to understand certain things like <code>addEventListener</code> in JavaScript. With the help of jQuery, I get to know how event listeners work javascript through the following syntax: <code>jQuery([element]#/.[id/class name].on([action], function(){ });</code>, i get to know that, if an action is performed on the target DOM element, it could be said that  </li> 
          <br> 
          <br> 
          <li align = "justify"></li> 
          <br> 
          <br> 
        </ol>  
    </ol>
  <br>  
  <li> CSS Keyframes </li> 
    <ol> 
      <li align = "justify"> <b> 100% dependance on someone else's animation is not fun at all</b> </li> 
      <ol> 
        <li align = "justify"> I have decided not to use Lottie Files for every single part of my website which require animations. Instead I have decided to recreate my very own loading animation using CSS Keyframes</li>
        <br> 
        <li> </li>  
      </ol>
      <br> 
      <li align = "text"><b> I just wanted to challenge myself. </b></li> 
      <ol> 
        <li align = "justify">CSS Keyframes literally allows me to code animations from scratch without using any advanced software. The only software that I was using was just an Integrated Development Environment <strong>IDE</strong> specially created for programming</li> 
        <br> 
        <br> 
        <li align = "justify">I am a person who really like to code graphics, their interaction and its layout, to make it look visually appealing, and at the same time serves a significant amount of purpose.</li> 
      </ol>  
    </ol> 
  <br> 
  <li> Restdb.io </li> 
    <ol> 
      <li align = "justify"><b>Website content management and synchronisation</b></li> 
      <ol> 
        <li align = "justify">Since the board game that I will be creating for my website is a multiplayer game, this would therefore mean that there is a need for matchmaking. But the question here is, how does matchmaking take place, since we will need to pull another player to the current game room over the internet, therefore we need APIs to do it.</li> 
        <br> 
        <br> 
        <li align = "justify">
      </ol> 
    </ol> 
  <br> 
  <li> Lottie files </li> 
    <ol> 
      <li align = "justify"><b>Can be easily inserted into HTML with the help of automatically generated URL(s)</b></li>  
      <ol> 
        <li align = "justify"> Provides short animations that takes up less storage space on my device. Prove to take up less storage space as compared to SVG(s) and GIF(s) </li> 
        <br> 
        <br> 
        <li align = "justify"> I need Lottie files when it comes to loading animations. Saves time as compared to doing animations from scratch using CSS keyframes and SVG.</li> 
      </ol> 
    </ol>
  <br>  
  <br>
  <li> Adobe XD </li> 
    <ol> 
      <li align = "justify"><b>Used for initial development of the webpage</b></li> 
      <ol> 
        <li align = "justify"> Used for creating the wireframes for the website. Important because I still have to ensure that the webpage looks well organised, through proper web semantics, and usage of appropriate html tags and css styling. </li> 
        <br>
        <br>  
        <li align = "justify"> In order to ensure that my webpages are fully responsive with changing screen widths, and changing heights. </li> 
        <br>
        <br>  
        <li align = "justify">Most importantly have a referecing blueprint, that I could look at while developing.</li> 
        <br> 
        <br> 
      </ol> 
    </ol> 
  <br> 
  <br> 
  <li> Adobe Illustrator </li> 
    <ol> 
      <li align = "justify">Tried to stay away from using online stock images as I feel that this does not show that I am a good developer. Hence why not take this good opportunity to come up with something that nobody has come up with before. </li> 
    </ol> 
</ul> 

<br> 
<hr> 
<br> 

## Testing 

<p align = "justify">
  While the developer is 100% responsible for ensuring that this website functions as intended, the developer would like to request any future users of this website to do the following testing and report any bugs to the developer via the in-game contact form. 
</p> 

<ol> 
  
</ol>

<br>
<hr>
<br> 

## Acknowledgements 

<p align = "justify">
  The developer of this website would like to thank the following publisher(s), developer(s), for providing the following code, library, for making this development possible.
</p>



#### 1. normalise.css 

#### 2. jQuery library 

#### 3. Loading 40 | Paperplane 










