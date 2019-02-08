function Missile(p) {

    var self = this;

    this.vx = 0;
    this.vy = 0;
    this.vr = 0;
    this.sw = 1;
    this.sh = 1;
    this.px = p.px;
    this.py = p.py;
    this.pr = p.pr;
    this.va = 9.00;
    this.vf = 0.90;

    this.owner = null;
    this.miss = false;
    this.shot = false;

    this.img = new Image();
    this.img.src = 'missile.png';
    this.enemies = p.enemies || [];
    this.initial = { px: p.px, py: p.py, pr: p.pr };

    this.keys = { u: false, d: false, l: false, r: false, m: false };
    this.target = this.enemies.length ? this.enemies[0] : { px: 0, py: 0, pr: 0 };
    this.img.onload = function (e) { self.sw = e.path[0].width; self.sh = e.path[0].height; };

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
            var target = this.enemies[0];
            this.owner.miss(this.initial, target);
            Game.destroy(this, Game.objects.missiles);

        } else {

            for (var i in this.enemies) {

                var dist = Calc.dist(this, this.enemies[i]);

                if (dist.t < 30) {

                    this.miss = false;
                    var init = this.initial;
                    this.owner.hit(init, this.enemies[i]);
                    Game.destroy(this, Game.objects.missiles);

                }

            }

        }

    };

}