class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :1.0,
          
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=0
      
    }
  display(){
      if(this.body.speed <4){
        console.log("less speed : "+ this.visibility);
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
      }else {
        console.log("more speed : "+ this.visibility);
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-2;
        tint(255,this.visibility);
        rect(this.body, this.body.position.x, this.body.position.y, 50,50);
        pop();
      }
  }
  score(){
      console.log("Visibility: " + this.visibility)
      console.log("Score:" +score)
      if (this.visibility<0 && this.visibility>-105){
        score++
      }
  }

}