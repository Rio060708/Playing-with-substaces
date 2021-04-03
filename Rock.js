class Rock{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.8,
		densyty:12,
		friction:0.9

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
			ellipseMode(RADIUS);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,50)
			pop()
	}

}