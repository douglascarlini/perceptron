function Ship(p) {

    this.vx = 0;
    this.vy = 0;
    this.vr = 0;
    this.px = p.px;
    this.py = p.py;
    this.pr = p.pr;
    this.va = 1.00;
    this.vf = 0.89;
    this.sw = 100.00;
    this.sh = 62.000;

    this.miss = false;
    this.shot = false;

    this.img = new Image();
    this.img.src = 'ship.png';

    this.move = function () {

        this.vx *= this.vf;
        this.vy *= this.vf;
        this.vr *= this.vf;

        if (Game.keys.u) this.vy -= this.va;
        if (Game.keys.d) this.vy += this.va;
        if (Game.keys.l) this.vx -= this.va;
        if (Game.keys.r) this.vx += this.va;

        this.px += this.vx;
        this.py += this.vy;
        this.pr += this.vr;

    };

}