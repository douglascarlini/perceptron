// var Perceptron = require('./perceptron');

function plan(max) { return parseInt(-max + Math.random() * (max * 2)); }
function rand(max) { return parseInt(Math.random() * max); }
var dataset = [], loop, max = 99;

function initData() {

    for (let i = 0; i < 300; i++) {
        dataset.push({ inputs: [rand(max), rand(max)], output: 0 });
        dataset.push({ inputs: [rand(max), rand(max)], output: 1 });
    }

}

function run() {

    var neuron = new Perceptron();
    neuron.init(0.5, 10000);
    neuron.train(dataset);

    var errors = 0;
    var counter = 0;
    var ctx = Canvas.create();
    Canvas.write(ctx, `Dataset: ${dataset.length}`, 10, 25, 20);

    loop = setInterval(function () {

        var x = rand(max), y = rand(max);
        var o = neuron.run([x, y]);

        counter++;
        render(ctx, x, y, o, max, 100);
        if (o == 0 || o == 1) dataset.push({ inputs: [x, y], output: o }); else errors++;

    }, 20);

    setTimeout(function () {

        var accuracy = `${(100 - ((errors * 100) / counter)).toFixed(2)}%`;
        Canvas.write(ctx, accuracy, 7, 100, 50);
        console.log({ accuracy });
        clearInterval(loop);
        neuron = null;
        run();

    }, 5000);

}

initData();
run();
