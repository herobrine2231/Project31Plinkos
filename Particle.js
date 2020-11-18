class Particle
{
    constructor(x, y, r)
    {
        var options=
        {
        restituion:0.2
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.color=color(random(0,255), random(0,255), random(0,255));
    this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world, this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle= this.body.angle;
      push()
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    ellipseMode(RADIUS);
    fill(this.color)
    ellipse(0,0,this.r, this.r);
	//	imageMode(CENTER);
        //image(this.image, 0,0,this.r, this.r)
		pop()
    }

}