const circumcircle = require('../index.js');

let raf;

// init canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 640;

// init points
const points = [ [0.0, -0.5], [0.5, 0.5], [-0.5, 0.5] ];

for (let i = 0; i < points.length; i++) {
	points[i][0] *= canvas.width * 0.4;
	points[i][1] *= canvas.height * 0.4;
}

const wiggle = () => {
	const time = Date.now() * 0.001;

	points[0][0] += Math.sin(time) * Math.cos(time * 0.5);
	points[0][1] += (Math.sin(time) * Math.cos(time * 0.2));

	// points[1][0] += (Math.sin(time * 0.2) * Math.cos(time * 0.7));
	points[1][1] += Math.cos(time);

	// points[2][0] += (Math.sin(time * 0.8) + Math.sin(time * 0.5));
	points[2][1] += Math.sin(time);
};

const draw = () => {
	ctx.fillStyle = '#eee';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.save();
	ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
	ctx.fillStyle = 'black';
	ctx.lineWidth = 2;
	
	// draw points
  let x, y;
  for (let i = 0; i < points.length; i++) {
    x = points[i][0];
    y = points[i][1];
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // draw triangle
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  ctx.lineTo(points[1][0], points[1][1]);
  ctx.lineTo(points[2][0], points[2][1]);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  // draw circumcircle
  ctx.strokeStyle = 'black';
  let circle = circumcircle(points);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
  ctx.stroke();

  // draw circumcenter
  ctx.fillStyle = 'black';
  ctx.save();
	ctx.translate(circle.x, circle.y);
  ctx.beginPath();
  ctx.fillRect(-1, -6, 2, 12);
  ctx.fillRect(-6, -1, 12, 2);
  ctx.restore();

  ctx.restore();
};

const animate = () => {
	raf = requestAnimationFrame(animate);
	wiggle();
	draw();
}

animate();
