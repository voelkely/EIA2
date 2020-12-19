"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
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
    }
    L09_Classes_Skipiste.Vector = Vector;
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {}));
//# sourceMappingURL=Vector.js.map