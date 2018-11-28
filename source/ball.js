class Ball {
	constructor(x=390, y=190, vector) {
		this.bgColor = 255;
		this.x = x;
		this.y = y;
		this.height = 20;
		this.width = 20;
		this.vector = vector;
	}

	draw(p) {
		p.fill(this.bgColor);
		p.rect(this.x, this.y, this.width, this.height);
	}

	move() {
		this.x += this.vector.x;
		this.y += this.vector.y;
	}

	hitCorner() {
		if (this.y === 0) {
			this.vector.y *= -1;
		}

		if (this.y === 400 - this.height) {
			this.vector.y *= -1;
		}
	}

	hitY(player) {
		return player.y <= this.y && player.y + player.height >= this.y;
	}

	hitRight(player) {
		if (this.hitY(player)) {
			if (player.x - player.width === this.x) {
				this.vector.x *= -1;
			}
		}
	}

	hitLeft(player) {
		if (this.hitY(player)) {
			if (player.x + player.width === this.x) {
				this.vector.x *= -1;
			}
		}
	}

	reset() {
		this.x = 390;
		this.y = 190;
	}
}

export default Ball;
