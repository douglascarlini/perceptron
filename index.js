// var Perceptron = require('./perceptron');

function plan(max) { return parseInt(-max + Math.random() * (max * 2)); }
function rand(max) { return parseInt(Math.random() * max); }
var dataset = [], zeros = 0, ones = 0, loop, max = 99;

function initData() {

    for (let i = 0; i < 999; i++) {

        var o = plan(5);
        var x = rand(max);
        var y = rand(max);
        o = o > 0 ? 1 : 0;
        if (o > 0) ones++; else zeros++;

        dataset.push({ inputs: [x, y], output: o });

    }

    console.log({ zeros, ones });

}

function run() {

    var neuron = new Perceptron();
    var ctx = Canvas.create();
    neuron.init(0.5, 1000);
    neuron.train(dataset);

    loop = setInterval(function () {

        var x = rand(max), y = rand(max);
        var o = neuron.run([x, y]);

        console.log({ x, y, o });
        render(ctx, x, y, o, max, 100);
        if (o == 0 || o == 1) dataset.push({ inputs: [x, y], output: o });

    }, 50);

    setTimeout(function () {

        clearInterval(loop);
        run();

    }, 9999);

}

initData();
run();
