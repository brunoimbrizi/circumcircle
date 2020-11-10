const circumcircle = (points, radiusSq = false) => {
	const EPSILON = 1.0e-6;
	const circle = {};

	const ax = points[0][0];
	const ay = points[0][1];
	const bx = points[1][0];
	const by = points[1][1];
	const cx = points[2][0];
	const cy = points[2][1];

	const A = bx - ax;
	const B = by - ay;
	const C = cx - ax;
	const D = cy - ay;

	const E = A * (ax + bx) + B * (ay + by);
	const F = C * (ax + cx) + D * (ay + cy);

	const G = 2 * (A * (cy - by) - B * (cx - bx));

	let dx, dy;

	if (Math.abs(G) < EPSILON) {
		const minx = Math.min(ax, bx, cx);
		const miny = Math.min(ay, by, cy);
		const maxx = Math.max(ax, bx, cx);
		const maxy = Math.max(ay, by, cy);

		circle.x = (minx + maxx) * 0.5;
		circle.y = (miny + maxy) * 0.5;

		dx = circle.x - minx;
		dy = circle.y - miny;
	}
	else {
		const cx = (D * E - B * F) / G;
		const cy = (A * F - C * E) / G;

		circle.x = cx;
		circle.y = cy;

		dx = circle.x - ax;
		dy = circle.y - ay;
	}

	// radius squared
	circle.r = dx * dx + dy * dy;

	// radius
	if (!radiusSq) circle.r = Math.sqrt(circle.r);

	return circle;
}

module.exports = circumcircle;
