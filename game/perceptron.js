var entradas = [{ x: [0, 0], y: 0 }];
var pesos = [...entradas[0].x.map(i => Math.random())];
var ativar = (u) => { return (1 / (1 + Math.exp(-u))); };
var ajustar = (e, x) => { x.map((v, i) => { pesos[i] += 0.5 * e * x[i] }); };
var testar = (x) => { var u = 0; x.map((v, i) => { u += pesos[i] * x[i] }); return ativar(u); };

var treinar = (x) => {
    for (let i = 1; i < 10000; i++) {
        x.map((v, i) => {
            var valor = testar(x[i].x);
            if (valor != x[i].y) {
                var erro = x[i].y - valor;
                ajustar(erro, x[i].x);
            }
        });
    }
}