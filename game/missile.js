function Missile(p) {

    this.vx = 0;
    this.vy = 0;
    this.vr = 0;
    this.px = p.px;
    this.py = p.py;
    this.pr = p.pr;
    this.va = 3.00;
    this.vf = 0.90;
    this.sw = 67.00;
    this.sh = 13.00;

    this.owner = null;
    this.miss = false;
    this.shot = false;

    this.img = new Image();
    this.img.src = 'missile.png';

    this.keys = { u: false, d: false, l: false, r: false, m: false },

    this.move = function () {

        this.vx *= this.vf;
        this.vy *= this.vf;
        this.vr *= this.vf;

        this.vx = Math.cos(this.pr * Math.PI / 180) * this.va;
        this.vy = Math.sin(this.pr * Math.PI / 180) * this.va;

        this.px += this.vx;
        this.py += this.vy;
        this.pr += this.vr;

        if (Calc.offscreen(this, Game.display.w, Game.display.h)) {

            this.miss = true;
            this.owner.miss(this);
            Game.destroy(this, Game.objects.missiles);

        }

    };

}