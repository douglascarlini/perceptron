const Canvas = {

    w: 300,
    h: 300,

    create: function () {
        var group = document.getElementById('canvas');
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        canvas.height = this.w;
        canvas.width = this.h;
        group.insertBefore(canvas, group.childNodes[0]);
        return ctx;
    },

    write: function (ctx, text, x, y, s) {
        ctx.font = `${s}px monospace`;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillText(text, x, y);
    }

};

function render(ctx, x, y, o, max, alpha) {

    var a = alpha / 100;
    var colors = [`0,180,0,${a}`, `0,0,255,${a}`, `255,0,0,${a}`];

    x = (x * Canvas.w) / max;
    y = (y * Canvas.h) / max;

    ctx.save();

    ctx.fillStyle = 'rgba(' + (colors[o] || colors[2]) + ')';
    ctx.beginPath();
    ctx.arc(x, y, 5, 2 * Math.PI, false);
    ctx.fill();

    ctx.restore();
}