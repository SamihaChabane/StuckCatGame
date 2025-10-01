function keyState()//this is an object
{
this.value=0;
}

function doKeyDown(e)
		{
			if (e.keyCode == 32) //space key
			{
				mykeyState.value=mykeyState.value|16;
			}				
			if (e.keyCode == 65) //a key
			{
				mykeyState.value=mykeyState.value|2;
			}		
			if (e.keyCode == 68) //d key
			{
				mykeyState.value=mykeyState.value|1;
			}		
	
		}
function doKeyUp(e)
		{	
			if (e.keyCode == 32) //space key
			{
				mykeyState.value=mykeyState.value&~16;
			}				
			if (e.keyCode == 65) //a key
						{
				mykeyState.value=mykeyState.value&~2;
			}		
			if (e.keyCode == 68) //d key
			{
				mykeyState.value=mykeyState.value&~1;
			}		
   		}
document.addEventListener('keydown', doKeyDown, true);
document.addEventListener('keyup', doKeyUp, true);