var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var h = canvas.height;
var w = canvas.width;

function render(x, y, o, max) {

    x = (x * w) / max;
    y = (y * h) / max;

    ctx.save();

    ctx.fillStyle = (o == 0 ? "green" : (o == 1 ? "blue" : "red"));
    ctx.beginPath();
    ctx.arc(x, y, 5, 2 * Math.PI, false);
    ctx.fill();

    ctx.restore();
}