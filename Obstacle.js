class Obstacle{

    constructor(x,y,radius){
        this.x=x
        this.y=y
        this.radius=2*radius

        var options={
            isStatic:true,
            restitution:1,
            density:0.1,
            friction:0,
            frictionAir:0,
            frictionStatic:0,
            mass:0.01,
            inertia:100000000
        }
        this.body=Bodies.circle(this.x,this.y,2*radius,options)
        World.add(world,this.body)
    }

    display(){
        push()
        fill("white")
        circle(this.body.position.x,this.body.position.y,2*this.radius)
        pop()
    }


}