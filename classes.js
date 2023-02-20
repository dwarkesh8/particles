class Particle {
	constructor(x, y, r, vx, vy, pColor) {
		this.x = x;
		this.y = y;
		this.r = r;

		this.vx = vx;
		this.vy = vy;
		this.pColor = pColor;
	}
	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.pColor;
		ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		ctx.fill();

		ctx.fillStyle = 'black';
		ctx.font = "15px Arial";
		ctx.fillText('x: '+this.x.toFixed(3), canvas.width-100, 20); 
		ctx.fillText('y: '+this.y.toFixed(3), canvas.width-100, 40); 
	}

	update() {
		if (this.x > canvas.width-this.r/2) {
			this.vx = this.vx*-1;
		}
		if (this.x < 0) {
			this.vx = this.vx*-1;
		}
		if (this.y > canvas.height-this.r/2) {
			this.vy = this.vy*-1;
		}
		if (this.y < 0) {
			this.vy = this.vy*-1;
		}

		this.x = this.x+this.vx;
		this.y = this.y+this.vy;
	}
}
let p1 = new Particle(200, 100, 5, 3, 6, 'RED');
let p2 = new Particle(100, 200, 5, 6, 3, 'GREEN');