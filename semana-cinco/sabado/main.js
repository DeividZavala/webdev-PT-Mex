// variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var pipes = [];
var gravity = 4;


// Clases
class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "./images/bg.png"
    }

    draw(){
        this.x--;
        if(this.x < -canvas.width) this.x = 0;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }

}

class Flappy{
    constructor(){
        this.x = 100;
        this.y = 190;
        this.width = 30;
        this.height = 30;
        this.image = new Image();
        this.image.src = "./images/flappy.png"
    }

    draw(){
        if(this.y < canvas.height - this.height) this.y += gravity;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

class Pipe{
    constructor(){

    }
}


// Instancias
var fondo = new Background();
var flappy = new Flappy();


// Helpers
function start(){
    interval = setInterval(update, 1000/60)
}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fondo.draw();
    flappy.draw();
}

function drawPipes(){

}

function generatePipes(){

}

function restart(){

}

addEventListener("keydown", function(e){
    if(e.keyCode === 32){
        flappy.y -= 80;
    }
})

start();