window.addEventListener('load', function(){
	let canvas = document.getElementById('playground');
	let ctx = canvas.getContext('2d');
	window.addEventListener('resize', function(){
		canvas.width = 800;
		canvas.height = 500;
	});
	canvas.width = 800;
	canvas.height = 500;

	let particlesArrary = [];

	for (var i=0; i<5; i++) {
		particlesArrary.push(new Particle(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*2, Math.random()*1, Math.random()*1, 'white'));
	}
	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(i=0; i<particlesArrary.length; i++) {
			particlesArrary[i].update(canvas);
			particlesArrary[i].draw(ctx);
		}
		requestAnimationFrame(animate);
	}
	animate();
});
