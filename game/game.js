var Game = {

    ctx: false,
    canvas: false,
    display: { w: 800, h: 500 },
    objects: { ships: [], missiles: [], enemies: [] },
    keys: { u: false, d: false, l: false, r: false, a: false, b: false },

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

        Game.ctx.clearRect(0, 0, Game.display.w, Game.display.h);

        for (var i in Game.objects) {
            for (var j in Game.objects[i]) {
                Game.render(Game.objects[i][j]);
                Game.objects[i][j].move();
            }
        }

        setTimeout(Game.loop, 20);
        Game.player();

    },

    circle: function (x, y) {
        Game.ctx.save();
        Game.ctx.fillStyle = 'rgb(0, 255, 0)';
        Game.ctx.beginPath();
        Game.ctx.arc(x, y, 5, 2 * Math.PI, false);
        Game.ctx.fill();
        Game.ctx.restore();
    },

    render: function (obj) {

        Game.ctx.save();

        Game.ctx.translate(obj.px, obj.py);
        Game.ctx.rotate(obj.pr * Math.PI / 180);
        var x = -(obj.sw / 2), y = -(obj.sh / 2);
        Game.ctx.drawImage(obj.img, 0, 0, obj.sw, obj.sh, x, y, obj.sw, obj.sh);

        Game.ctx.restore();

    },

    keyD: function (e) { Game.actions(e.keyCode, true) },

    keyU: function (e) { Game.actions(e.keyCode, false) },

    actions: function (code, state) {
        switch (code) {
            case 37: Game.keys.l = state; break;
            case 38: Game.keys.u = state; break;
            case 39: Game.keys.r = state; break;
            case 40: Game.keys.d = state; break;
            case 90: Game.keys.a = state; break;
        }
    },

    player: function () {
        if (Game.objects.ships.length) {
            Game.objects.ships[0].keys = Game.keys;
        }
    },

    destroy: function (obj, list) {
        for (var i in list) {
            if (list[i] == obj) {
                return list.splice(i, 1);
            }
        }
    }

};

window.onload = function () {

    var enemy = new Enemy({ px: (Game.display.w / 2), py: (Game.display.h / 2), pr: 0 });
    var ship = new Ship({ px: 100, py: (Game.display.h / 2), pr: 0 });
    Game.objects.enemies.push(enemy);
    Game.objects.ships.push(ship);
    ship.enemies.push(enemy);
    enemy.enemies.push(ship);
    Game.init();

    setTimeout(() => {
        enemy.train(ship.dataset);
    }, 10000);

};