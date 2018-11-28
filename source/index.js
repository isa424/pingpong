import Player from "./player.js";
import Ball from "./ball.js";
import * as p5 from "p5";

const sketch = (p) => {
	let left, right, ball, height=400, width=800, isPaused=false;

	p.setup = () => {
		left = new Player(20, 150);
		right = new Player(width-40, 150);
		ball = new Ball(390, 190, {x:5, y:-5});;

		p.createCanvas(width, height);
	};

	p.draw = () => {
		p.background(0);
		p.fill(255);

		if (p.keyIsDown(p.DOWN_ARROW)) {
			right.moveDown();
		} else if (p.keyIsDown(p.UP_ARROW)) {
			right.moveUp();
		}

		if (p.keyIsDown(87)) {
			left.moveUp();
		} else if (p.keyIsDown(83)) {
			left.moveDown();
		}

		ball.hitCorner();
		ball.hitLeft(left);
		ball.hitRight(right);

		ball.move();

		left.draw(p);
		right.draw(p);
		ball.draw(p);

		p.fill("yellow");
		p.textSize(16);
		p.text(left.score, width/2 - 20, 50);
		p.text(right.score, width/2 + 20, 50);
		p.textSize(14);
		p.text("W: Up\tS: Down", 20, height - 20);
		p.text("Up Arrow\tDown Arrow", width - 180, height - 20);
		p.text("Esc: Pause", width/2-20, height-20);

		if (ball.x < 0) {
			right.score += 1;
			ball.reset();
		} else if (ball.x > width) {
			left.score += 1;
			ball.reset();
		}
	};

	p.keyPressed = () => {
		if (p.keyCode === p.ESCAPE) {
			if (isPaused) {
				p.loop();
				isPaused = false;
			} else {
				p.noLoop();
				isPaused = true;
			}
		}
	}
};

new p5(sketch);
