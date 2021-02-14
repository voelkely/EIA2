"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class CircleParticle extends Endabgabe_Feuerwerk.Moveable {
        constructor(_color, _speed, _positionX, _positionY, _i, _radius, _shape) {
            super(_color, _speed, _positionX, _positionY, _i, _radius);
            this.shape = _shape;
        }
        move(_timeslice) {
            // console.log("super move");
            super.move(_timeslice);
        }
        draw() {
            // console.log("circle particle drawn");
            Endabgabe_Feuerwerk.crc2.save();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.scale(this.size, this.size);
            Endabgabe_Feuerwerk.crc2.globalAlpha = this.alpha;
            Endabgabe_Feuerwerk.crc2.beginPath();
            Endabgabe_Feuerwerk.crc2.arc(0, 0, 5, 0, 2 * Math.PI, true);
            Endabgabe_Feuerwerk.crc2.fillStyle = this.color;
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
        } // draw zu
    } //class zu
    Endabgabe_Feuerwerk.CircleParticle = CircleParticle;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu 
//# sourceMappingURL=CircleParticles.js.map