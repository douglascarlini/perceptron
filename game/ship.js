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

    this.keys = { u: false, d: false, l: false, r: false, a: false },

    this.bind = { mNum: 0, mInt: 7 },

    this.move = function () {

        this.vx *= this.vf;
        this.vy *= this.vf;
        this.vr *= this.vf;

        if (this.keys.u) this.vy -= this.va;
        if (this.keys.d) this.vy += this.va;
        if (this.keys.l) this.vx -= this.va;
        if (this.keys.r) this.vx += this.va;
        if (this.keys.a) (this.bind.mNum > this.bind.mInt) ? this.missile() : null;

        this.px += this.vx;
        this.py += this.vy;
        this.pr += this.vr;
        this.pr = this.vy;
        this.bind.mNum++;

    };

    this.miss = function (missile) {
        console.log(missile);
    };

    this.missile = function () {
        var missile = new Missile({ px: this.px, py: this.py, pr: this.pr });
        Game.objects.missiles.push(missile);
        missile.owner = this;
        this.bind.mNum = 0;
    }

}