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
        this.image1 = new Image();
        this.image1.src = "https://bit.ly/2L7yH3f";
        this.image2 = new Image();
        this.image2.src = "https://bit.ly/2L3ikoe";
        this.image = this.image1;
    }

    draw(){
        if(frames % 10 === 0 ) this.image = this.image === this.image1 ? this.image2 : this.image1;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

var mario = new Mario();

/*mario.image.onload = function(){
    mario.draw();
}*/

var frames = 0;
setInterval(function(){
    frames++;
    ctx.clearRect(0,0, 400, 200);
    mario.draw();
}, 1000/60);