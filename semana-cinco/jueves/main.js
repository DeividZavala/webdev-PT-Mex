var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/*var image = new Image();
image.src = "https://bit.ly/2L7yH3f";

image.onload = function(){
    ctx.drawImage(image, 20, 20, 30, 40);
}*/

class Mario{

    constructor(){
        this.x = 20;
        this.y = 20;
        this.width = 30;
        this.height = 40;
        this.image = new Image();
        this.image.src = "https://bit.ly/2L7yH3f"
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

var mario = new Mario();

mario.image.onload = function(){
    mario.draw();
}