class Snow{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:5,
			density:12
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage("snow4.webp");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        
	}
	display()
	{
			
			var snowpos=this.body.position;		

			push()
			translate(snowpos.x, snowpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
  