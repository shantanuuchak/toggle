var bg;

var constants = {
  regButtonW: 6.5,
  regButtonH: 2,
  selectW: 5,
  selectH: 1.5,
  imageW: 1214,
  imageH: 753,
  screenX: 670,
  screenY: 310,
  squareSize: 5,
  textSize: 18
};


var wUnit;
var hUnit;

function preload(){
  bg = loadImage('graphics/Computer.png')
}

$(document).ready(function(){

  var offBulb = "graphics/lightsoff.png";
  var onBulb = "graphics/lightson.png";

  var sun = 'graphics/sun.png';
  var moon = 'graphics/moon.png';

  var $background = $("body");
  var $booleanButton = $("input#booleanButton");
  // var $celestialObject = $("img#sun");

  // When we click the boolean button, run a function
  $booleanButton.click(function(){
    $('body').prepend('<img id="moon" src="graphics/moon.png"/>');
    console.log("clicked");
    // cache the jquery $(this) keyword because we use it repeatedly
    var $this = $(this);

    // access words that will change
    var $par = $('p#words');
    var $par2 = $('p#words2');

    // celestial animations
    var $sun = $('img#sun');
    var $moon = $('img#moon');

    // toggle the class of the boolean button so we can alter the text according to if it's on or off
    $this.toggleClass("off");

    // if the thing we just clicked on has the class of off, we need to give the option to turn on
    // and offer that option accordingly in the text "turn on!"
    // and make sure that the lightbulb is off via the src because how could we turn a bulb on
    // that's already on?
    // and vice versa... I hope this is enough explanation
    if( $this.hasClass("off") ) {
      $par.text("LightsOn = False");
      $par2.text("Turn the lights on!");
      $sun.removeClass("down");
      $sun.addClass("up");
      $moon.removeClass("up");
      $moon.addClass("down");
      $background.attr("background", offBulb);
      // $background.attr("background-color", "#000000");
      // $celestialObject.attr("src", sun);
    } else {
      $par.text("LightsOn = True");
      $par2.text("Turn the lights off!");
      // $sun.toggleClass("down");
      $sun.removeClass("up");
      $sun.addClass("down");
      $moon.removeClass("down");
      $moon.addClass("up");
      $background.attr("background", onBulb);
      // $background.attr("background-color", "#e85b49");
      // $celestialObject.attr("src", moon);
    }
  });


});