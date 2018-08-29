class Item{
    constructor(x,y,width,height,image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = image;
    }

    draw(){
        //mátodo para dibujar
        console.log("perro");
    }

}

class Character extends Item{
    constructor(x,y,width,height,image, damage){
        super(x,y,width,height,image);
        this.damage = damage;
    }

    getDamage(){
        console.log(`Mi daño es de ${this.damage} y tengo ${this.width} de alto y mi imagen es esta ${this.image.src}`)
    }

}


var mario = new Character(20,20,40,40,"https://bit.ly/2L7yH3f", 48);

console.log(mario);

mario.getDamage();