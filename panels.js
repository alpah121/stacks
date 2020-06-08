//Panels.js panels 0-9 H, C, I
PanelsJSON = {
"Hpanel0" : function(pos, ctx) 
	{
	ctx.fillRect(pos[0], pos[1], 20, 20);
	}
"Hpanel1" : function(pos, ctx) 
	{
	ctx.fillRect(pos[0], pos[1], 20, 20);
	}
"Hdoor0" : function(pos, ctx) 
	{
	ctx.fillRect(pos[0], pos[1], 20, 20);
	ctx.fillRect(pos[0] + 10, pos[1], 10, 10);
	}
"Hdoor1" : function(pos, ctx) 
	{
	ctx.fillRect(pos[0], pos[1], 20, 20);
	ctx.fillRect(pos[0] + 10, pos[1], 10, 10);
	}
};
