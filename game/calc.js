var Calc = {
    
    offscreen: function (obj, w, h) {
        if (obj.px > w) return true;
        if (obj.px < 0) return true;
        if (obj.py > h) return true;
        if (obj.py < 0) return true;
    }

};