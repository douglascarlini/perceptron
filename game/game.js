var Game = {

    ctx: false,
    canvas: false,
    display: { w:  800, h: 400 },
    objects: { ships: [], missiles: [] },
    keys: { u: false, d: false, l: false, r: false },

    init: function () {
        window.addEventListener('keydown', Game.keyD, false);
        Game.canvas = document.getElementById('canvas');
        window.addEventListener('keyup', Game.keyU);
        Game.ctx = Game.canvas.getContext('2d');
        Game.canvas.height = Game.display.h;
        Game.canvas.width = Game.display.w;
        Game.loop();
    },

    loop: function () {
        
        for (var i in Game.objects) {
            for (var j in Game.objects[i]) {
                Game.render(Game.objects[i][j]);
                Game.objects[i][j].move();
            }
        }

        setTimeout(Game.loop, 20);

    },

    render: function (obj) {

        Game.ctx.clearRect(0, 0, Game.display.w, Game.display.h);

        Game.ctx.save();
        Game.ctx.translate(obj.px, obj.py);
        Game.ctx.rotate(obj.pr * Math.PI / 180);
        var x = -(obj.sw / 2), y = -(obj.sh / 2);
        Game.ctx.drawImage(obj.img, 0, 0, obj.sw, obj.sh, x, y, obj.sw, obj.sh);
        Game.ctx.restore();

    },

    keyD: function (e) {
        Game.actions(e.keyCode, true);
        console.log(e.keyCode);
    },

    keyU: function (e) {
        Game.actions(e.keyCode, false);
    },

    actions: function(code, state) {
        switch (code) {
            case 37: Game.keys.l = state; break;
            case 38: Game.keys.u = state; break;
            case 39: Game.keys.r = state; break;
            case 40: Game.keys.d = state; break;
        }
    }

};