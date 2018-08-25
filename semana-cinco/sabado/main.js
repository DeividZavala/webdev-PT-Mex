// variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var pipes = [];


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
    }

}

class Flappy{
    constructor(){

    }
}

class Pipe{
    constructor(){

    }
}


// Instancias
var fondo = new Background();


// Helpers
function start(){
    interval = setInterval(update, 1000/60)
}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fondo.draw();
}

function drawPipes(){

}

function generatePipes(){

}

function restart(){

}

start();