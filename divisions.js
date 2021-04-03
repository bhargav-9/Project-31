class divisions{
   constructor(x,y,w,h){
     var Options={
         isStatic:true
     }
     this.w=w;
     this.h=h;
     this.body=Bodies.rectangle(x,y,w,h,Options);
     World.add(world,this.body)
   }
   display(){
       var pos=this.body.position;
       rectMode(CENTER);
       fill("white")
       rect(pos.x,pos.y,this.w,this.h);
   }
}