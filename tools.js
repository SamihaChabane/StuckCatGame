var canvas = document.getElementById('canvas');//your paper that you draw on this is a global
var context = canvas.getContext('2d');//your pen that you use to draw this is a global

function getRandomArbitrary(min, max) //random floating point
{
  return Math.random() * (max - min) + min;
}
function getRandomInt(min,max)//random int
{
  return Math.floor((Math.random() * max) + min);
}
