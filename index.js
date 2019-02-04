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

    var canv = new Canvas(100, 100);
    var neuron = new Perceptron();
    neuron.init(0.5, 1000);
    neuron.train(dataset);
    var counter = 0;
    var errors = 0;

    canv.write(`Dataset: ${dataset.length}`, 7);

    loop = setInterval(function () {

        var x = rand(max), y = rand(max);
        var o = neuron.run([x, y]);

        counter++;
        canv.circle(x, y, o, max, 100);
        if (o != 0 && o != 1) errors++;
        dataset.push({ inputs: [x, y], output: o });

    }, 20);

    setTimeout(function () {

        var accuracy = `${(100 - ((errors * 100) / counter)).toFixed(2)}%`;
        console.log({ accuracy });
        canv.write(accuracy, 20);
        clearInterval(loop);
        neuron = null;
        run();

    }, 5000);

}

initData();
run();
