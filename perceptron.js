var Perceptron = function () {

    var net = this;

    this.bias = 1;
    this.weights = [];
    this.learnRate = 0.15;
    this.interactions = 1000;

    this.sigmoid = function (x) {
        return (1 / (1 + Math.exp(-x)));
    };

    this.init = function (learnRate, interactions) {
        net.interactions = interactions;
        net.learnRate = learnRate;
    };

    this.initWeights = function (num) {
        net.bias = parseInt(Math.random() * 10);
        for (let i = 0; i < num; i++) net.weights[i] = parseInt(Math.random() * 10);
    };

    this.train = function (data) {

        net.initWeights(data[0].inputs.length);
        var interaction = 0;
        var error = true;

        while (true) {

            error = false;
            var diff = 0;

            for (let i = 0; i < data.length; i++) {

                var result = net.run(data[i].inputs);

                if (result != data[i].output) {

                    error = true;
                    diff = data[i].output - result;
                    net.recalcWeights(diff, data[i].inputs);

                } else { error = false; }

            }

            interaction++;
            if (!error || interaction > net.interactions) break;
            console.log(`Interaction: ${interaction} - Error: ${diff.toFixed(12)}`);

        }
    };

    this.recalcWeights = function (diff, inputs) {
        for (let i = 0; i < net.weights.length; i++) {
            net.weights[i] += net.learnRate * diff * inputs[i];
        }
    };

    this.run = function (inputs, callback) {

        var sum = 0;

        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * net.weights[i];
        }

        sum += net.bias;
        var o = net.sigmoid(sum);
        return callback ? callback(o) : o;
    };

};

// module.exports = Perceptron;