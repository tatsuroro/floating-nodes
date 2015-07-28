class Particle {
    constructor([x, y], velocity) {
        this.pos = [x, y];
        this.velocity = velocity;
    }

    update() {
        this.pos = this.pos.map((coord, i) => {
            return Math.max(Math.min(coord + this.velocity[i], 1), -1);
        });
        this.pos.forEach((coord, i) => {
            if (coord >= 1 || coord <= -1) {
                this.velocity[i] *= -1;
            }
        });
        return this.pos.slice();
    }
}

export default Particle;
