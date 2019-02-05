var Calc = {

    dist: (a, b) => {
        var x = b.px - a.px;
        var y = b.py - a.py;
        return { x, y, t: Math.sqrt(x * x + y * y) };
    },

    offscreen: (obj, w, h) => {
        if (obj.px > w) return true;
        if (obj.px < 0) return true;
        if (obj.py > h) return true;
        if (obj.py < 0) return true;
    }

};