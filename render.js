var Canvas = {

    w: 400,
    h: 400,

    create: function () {
        var group = document.getElementById('canvas');
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        group.appendChild(canvas);
        canvas.height = this.w;
        canvas.width = this.h;
        return ctx;
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