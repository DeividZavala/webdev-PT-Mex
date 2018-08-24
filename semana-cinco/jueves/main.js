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
        this.y = 133;
        this.width = 25;
        this.height = 35;
        this.image1 = new Image();
        this.image1.src = "https://bit.ly/2L7yH3f";
        this.image2 = new Image();
        this.image2.src = "https://bit.ly/2L3ikoe";
        this.image = this.image1;
    }

    collision(item){
        return (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
    }

    draw(){
        if(this.y < 133) this.y += 4;
        if(frames % 10 === 0 ) this.image = this.image === this.image1 ? this.image2 : this.image1;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}


class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "https://bit.ly/2m9qY9Q";
    }

    draw(){
        this.x--;
        if(this.x < -canvas.width) this.x = 0;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }

}


class Enemy{
    constructor(){
        this.x = canvas.width;
        this.y = 133;
        this.width = 25;
        this.height = 35;
        this.image1 = new Image();
        this.image1.src = "https://bit.ly/2upxkWp";
    }

    draw(){
        if(frames % 10 === 0) this.x -= 15;
        ctx.drawImage(this.image1, this.x, this.y, this.width, this.height)
    }
}


var mario = new Mario();
var fondo = new Background();


var frames = 0;
var interval = setInterval(function(){
    frames++;
    ctx.clearRect(0,0, 400, 200);
    fondo.draw();
    mario.draw();
    generateEnemies();
    drawEnemies();
}, 1000/60);


addEventListener("keydown", function(e){
    if(e.keyCode === 32){
        mario.y -= 80;
    }
})

var enemies = [];

function generateEnemies(){
    if(frames % 100 === 0 || frames % 70 === 0 || frames % 170 === 0){
        let enemy = new Enemy();
        enemies.push(enemy)
    }
}

function drawEnemies(){
    enemies.forEach(function(enemy){
        enemy.draw();
        if(mario.collision(enemy)){
            
        }
    })
}