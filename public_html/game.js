//global variables
var mykeyState=new keyState();
//main character
var farmer=new Image();
farmer.src="img\\BoySprite.png";      
var hero=new sprite(farmer,50,470,5,5,48,61,0,0,48,61,canvas.width,canvas.height);
//background
var backgroundImage = new Image();
backgroundImage.src = "img\\skyBackground2.png";
//floor
var floorImage = new Image();
floorImage.src = "img\\grassFloor2.png";
//crate 
var crateImage = new Image();
crateImage.src = "img\\Crate.png";
var fps=60;
var last_frame_time=+new Date;//last frame time 
var how_many_seconds_ago=+new Date;//a prev frame time
var current_frame_time=+new Date;//current fram time
var current_position = 1152; //crate spawn location
//music
this.audio = new Audio('MeowGameSound.mp3');
this.audioTwo = new Audio('Cat_And_Mouse.mp3');

function update()
{   
    context.clearRect(0, 0, canvas.width, canvas.height);//clear canvas 
    hero.update(mykeyState,0);
    audioTwo.play();
};
function draw()
{
    context.save();
    //background
    context.drawImage(backgroundImage, 0, 0);
    context.drawImage(floorImage, 0, 0);
    //playable character
    hero.draw();
    //crate //switch to vector?
    current_frame_time=+new Date();
    if(current_frame_time-how_many_seconds_ago > 0.01)//speed og 50
    {
            if(current_position >= 0)
            {
                current_position = current_position-10; // 20 og speed
                if (current_position < 0)
                {
                    current_position = 1152;
                }
            }
        how_many_seconds_ago=current_frame_time;
        fps=1/(current_frame_time-last_frame_time)*100; //100 og 
    }
    last_frame_time=current_frame_time;
    context.drawImage(crateImage,current_position,540);
    context.restore();
};

alert("space jump, a left, d right");

window.requestAnimFrame = 
(function()
{
  return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||
    function(callback)
    {
        window.setTimeout(callback, 1000 / 60);
    };
})();

function gameloop()
{
  update();
  draw();
  requestAnimFrame(gameloop);
};
gameloop();//start the game

