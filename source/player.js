class Player {
	constructor(x, y) {
		this.bgColor = "255";
		this.x = x;
		this.y = y;
		this.height = 100;
		this.width = 20;
		this.score = 0;
	}

	draw(p) {
		p.fill(this.bgColor);
		p.rect(this.x, this.y, this.width, this.height);
	}

	moveUp() {
		if (this.y > 0) {
			this.y -= 10;
		}
	}

	moveDown() {
		if (this.y + this.height < 400) {
			this.y += 10;
		}
	}
}

export default Player;
