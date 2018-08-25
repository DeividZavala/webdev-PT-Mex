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

    collision(item){
        return (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
    }

    draw(){
        if(this.y < canvas.height - this.height) this.y += gravity;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

class Pipe{
    constructor(pos, y, height){
        this.x = canvas.width;
        this.y = y;
        this.width = 60;
        this.height = height;
        this.image = new Image();
        this.image.src = pos === "top" ? "./images/obstacle_top.png" : "./images/obstacle_bottom.png";
    }

    draw(){
        this.x -= 2;
        ctx.drawImage(this.image, this.x, this.y , this.width, this.height)
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
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fondo.draw();
    flappy.draw();
    generatePipes();
    drawPipes();
}

function drawPipes(){
    pipes.forEach((pipe)=>{
        pipe.draw();
        if(flappy.collision(pipe)){
            clearInterval(interval);
        }
    })
}

function generatePipes(){
    if(!(frames % 110 === 0)) return;
    var height = Math.floor((Math.random()* canvas.height * .55) + 40);
    var pipe1 = new Pipe("top", 0, height);
    var pipe2 = new Pipe(null, pipe1.height + 120,  canvas.height - pipe1.height - 120)
    pipes.push(pipe1);
    pipes.push(pipe2);
}

function restart(){

}

addEventListener("keydown", function(e){
    if(e.keyCode === 32){
        flappy.y -= 60;
    }
})

start();