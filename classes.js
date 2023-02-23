class Particle {
	constructor(x, y, r, vx, vy, pColor) {
			// this.canvas = canvas;
		this.x = x;
		this.y = y;
		this.r = r;

		this.vx = vx;
		this.vy = vy;
		this.pColor = pColor;

	}
	draw(context) {
		context.beginPath();
		context.fillStyle = this.pColor;
		context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		context.fill();

			// context.fillStyle = 'black';
			// context.font = "15px Arial";
			// context.fillText('x: '+this.x.toFixed(3), this.canvas.width-100, 20); 
			// context.fillText('y: '+this.y.toFixed(3), this.canvas.width-100, 40); 
	}

	update(canvas) {
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
