var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//ctx.fillRect(20, 20, 200, 150);
//ctx.strokeRect(10,10,250, 200);
//ctx.clearRect(30,30, 150, 100);

/*ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(250,150, 50, 0, Math.PI*1, false);
ctx.stroke();*/

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}

roundedRect(ctx, 12, 12, 150, 150, 10);

ctx.beginPath();
ctx.arc(50, 130, 20, 0, Math.PI*2);
ctx.fillStyle = "orange";
ctx.fill();


ctx.beginPath();
ctx.arc(30, 150, 70, 0, Math.PI*1.5, true);
ctx.strokeStyle = "blue";
ctx.lineWidth = "10";
ctx.lineCap = "round";
ctx.stroke();
ctx.beginPath();
ctx.arc(30, 150, 100, 0, Math.PI*1.5, true);
ctx.stroke();

ctx.fillText("Perro",100, 50, 200);

var image = new Image();
image.src = "https://files.cults3d.com/uploaders/5871147/illustration-file/1472384530-23895-5326/rhyhorn3dprint.107_large.jpg";

image.onload = function(){
    ctx.drawImage(image, 250, 150, 100, 100);
}