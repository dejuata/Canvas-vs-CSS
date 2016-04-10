/*
	id = id del canvas
	x  = posición en x
	y  = posición en y
	sx = escala en x
	sy = escala en y
	r  = radio
	b  = grosor del borde
	cb = color del borde
	cr = color relleno	
*/

function dibujar(id,x,y,sx,sy,r,b,cb,cr)
{
	var canvas  = document.getElementById(id);
	var ctx	    = canvas.getContext('2d');
	var circulo = Math.PI * 2;
	
	ctx.save();
	ctx.beginPath();
	ctx.scale(sx,sy);
	ctx.strokeStyle = cb;
	ctx.lineWidth	= b;
	ctx.arc(x,y,r,circulo,false);
	ctx.fillStyle = cr;
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}
