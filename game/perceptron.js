(function () {

    var self = function (conf = {}) {

        this.pesos = [];
        this.entradas = [];
        this.epocas = conf.epocas || 9999;
        this.aprendizado = conf.aprendizado || 0.2;
        this.ativar = function (u) { return (1 / (1 + Math.exp(-u))); };
        this.ajustar = function (e, x) { x.map((v, i) => { this.pesos[i] += this.aprendizado * e * x[i] }); };
        this.testar = function (x) { var u = 0; x.map((v, i) => { u += this.pesos[i] * x[i] }); return this.ativar(u + 1); };

        this.treinar = function (dataset = [{ x: [0, 0], y: 0 }]) {
            this.pesos = [...dataset[0].x.map(i => Math.random())];
            for (let epoca = 1; epoca < this.epocas; epoca++) {
                dataset.map((v, i) => {
                    var val = this.testar(dataset[i].x);
                    if (val != dataset[i].y) {
                        var erro = dataset[i].y - val;
                        this.ajustar(erro, dataset[i].x);
                    }
                });
            }
        };

    };

    window.Perceptron = self;

})();
