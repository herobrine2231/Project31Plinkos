class Plinko
{
    constructor(x, y, r)
    {
        var options=
        {
        isStatis:false,
        friction:1,
        density:1.2
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world, this.body);
    }

    display()
    {
        var pos=this.body.position;
      //  push()
	//	translate(pos.x, pos.y);
    ellipseMode(CENTER);
    fill("white")
    ellipse(this.x,this.y,this.r, this.r);
	//	imageMode(CENTER);
        //image(this.image, 0,0,this.r, this.r)
		//pop()
    }

}