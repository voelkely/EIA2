"use strict";
var Firework;
(function (Firework) {
    class Particles {
        constructor(_x, _y, _radius, _color) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
            this.color = _color;
        }
        move(_timeslice) {
            console.log("move");
        }
        draw() {
            console.log("particle drawn");
            Firework.crc2.save();
            Firework.crc2.beginPath();
            Firework.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            Firework.crc2.fillStyle = this.color;
            Firework.crc2.fill();
            Firework.crc2.closePath();
            Firework.crc2.restore();
        }
    }
    Firework.Particles = Particles;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particles.js.map