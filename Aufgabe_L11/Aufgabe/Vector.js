"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L11_Skipiste.Vector = Vector;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=Vector.js.map