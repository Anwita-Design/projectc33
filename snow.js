class Snow {
    constructor(x,y){
        console.log("In constructor");
        var options = {
            friction:0.5,
            density:0.2,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,10,10,options)
        this.x= x
        this.y= y
        this.image= loadImage('snow4.webp')
        World.add(world,this.body)
    }
    display(){
        console.log("In display()");
        imageMode(CENTER)
        image(this.image,this.x,this.y,10,10)
    }
}