function Canvas() {

    this.w = 300;
    this.h = 300;
    this.writeCounter = 1;

    this.create = function () {

        var group = document.getElementById('canvas');
        var canvas = document.createElement('canvas');
        this.ctx = canvas.getContext("2d");
        canvas.height = this.w;
        canvas.width = this.h;

        group.insertBefore(canvas, group.childNodes[0]);

    };

    this.write = function (text, s) {

        var y = 15 + (s * this.writeCounter * 1.5);
        this.ctx.font = `${parseInt((s * this.h) / 100)}px monospace`;
        this.ctx.fillStyle = "rgb(0,0,0)";
        this.ctx.fillText(text, 10, y);
        this.writeCounter++;

    };

    this.circle = function (x, y, o, max, alpha) {
        var a = alpha / 100;
        x = (x * this.w) / max, y = (y * this.h) / max;
        var colors = [`0,180,0,${a}`, `0,0,255,${a}`, `255,0,0,${a}`];

        this.ctx.save();
        this.ctx.fillStyle = 'rgba(' + (colors[o] || colors[2]) + ')';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.restore();
    };

    this.create();

};