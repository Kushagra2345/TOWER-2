class Box{


    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.image=loadImage("Images/Box.png")

        var options={
            isStatic:false,
            restitution:0.1,
            mass:0.1
        
        }

        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)


        this.visiblity=255
     

    }
   
   
    
    display(){


        var a=0;        

        if (this.body.speed<10){
            push()
            fill("white")
            translate(this.body.position.x,this.body.position.y)
            rectMode(CENTER)
            rotate (this.body.angle)
            image(this.image,0,0,32,32)
            tint(255,this.visiblity)
            this.visiblity-=5
            a=a+1
            pop()
        }else{
            push()
            World.remove(world,this.body)
            pop()
        }

        console.log(a)

        
    }

    
}