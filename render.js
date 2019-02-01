const colors = [`0, 180, 0, 0.5`, `0, 0, 180, 0.5`, `180, 0, 0, 0.5`];

function Canvas(w, h) {

    this.w = w;
    this.h = h;

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
        this.ctx.fillStyle = "rgb(0, 0, 0)";
        this.ctx.fillText(text, 10, y);
        this.writeCounter++;

    };

    this.circle = function (x, y, o, max) {
        var m = Math.min(this.w, this.h);
        x = (x * this.w) / max, y = (y * m) / max;

        this.ctx.save();
        this.ctx.fillStyle = 'rgba(' + (colors[o] || colors[2]) + ')';
        this.ctx.beginPath();
        this.ctx.arc(x, y, ((1 * 300) / 100), 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.restore();
    };

    this.create();

};