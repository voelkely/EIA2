"use strict";
var L09_Classes_Asteroids;
(function (L09_Classes_Asteroids) {
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
        // set velocity to random direction & random lenght >min <max
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L09_Classes_Asteroids.Vector = Vector;
})(L09_Classes_Asteroids || (L09_Classes_Asteroids = {}));
//# sourceMappingURL=Vector.js.map