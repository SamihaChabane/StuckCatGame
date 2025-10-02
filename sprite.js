//sprite sheet, sprite x, sprite y, change of x, change of y, sprite width, sprite height, source location x, source location y, source width, source height, canvas width, canvas height
function sprite(spritesheet, x, y, dx, dy, width, height, sx, sy, swidth, sheight, parentwidth, parentheight) //object definition for sprite
{
    this.spritesheet=spritesheet;//source image
    this.x = x;//location x and y
    this.y = y;	
    this.dx=dx;//change of x and y
    this.dy=dy; 
    this.width=width;//sprite width and height
    this.height=height;
    this.sx=sx;//source image location x and y
    this.sy=sy;
    this.swidth=swidth//source image height and width
    this.sheight=sheight;
    this.parentwidth=parentwidth;//canvas heigth and width
    this.parentheight=parentheight;
    this.currentrow=0;//current column and row of spritesheet
    this.currentcolumn=0;
};
//functions for sprite below
sprite.prototype = 
{   
    update: function(keystate) 
    {
        if(keystate.value>0)//a key has been pressed
        {
            if(keystate.value&16)//space bar
            {
                 if (this.y > 400) //limit on how high they can jump
                    {
                        this.y=this.y-10;
                    }
            }        
            if(keystate.value==1)//D key
            {
                this.x=this.x+this.dx;
                this.currentcolumn=1;
                if(this.y<470) //if character is in the air he needs to start coming down even if D is being pushed
                {
                    this.y = this.y + this.dy;
                }
            }
            if(keystate.value==2)//A key
            {
                this.x=this.x-this.dx;
                this.currentcolumn=3;
                if(this.y<470) //if character is in the air he needs to start coming down even if a is being pushed
                {
                    this.y = this.y + this.dy;
                }
            }
            this.currentrow=this.currentrow+0.20;
            if(this.currentrow>2)
                this.currentrow=0;
            //collisons
            if (this.x > 1090) //right edge
                {
                    this.x = 1090;
                }
            else if (this.x < -5) //left edge
                {
                    this.x = -5;
                }
        }
        else
        {
            if(this.y<470) //return them to floor if above it, needed for space pushed
            {
                this.y = this.y + this.dy; //goes down
            }
        }
    },
    draw: function() 
    {  
        context.drawImage(this.spritesheet,this.swidth*Math.floor(this.currentrow),this.sheight*this.currentcolumn,48,61,this.x,this.y,76,122);
    }
};




