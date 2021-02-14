"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class StarParticle extends Endabgabe_Feuerwerk.Moveable {
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
            Endabgabe_Feuerwerk.crc2.beginPath();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.globalAlpha = this.alpha;
            Endabgabe_Feuerwerk.crc2.scale(0.1, 0.1);
            Endabgabe_Feuerwerk.crc2.moveTo(75, 30);
            Endabgabe_Feuerwerk.crc2.lineTo(90, 60);
            Endabgabe_Feuerwerk.crc2.lineTo(125, 75);
            Endabgabe_Feuerwerk.crc2.lineTo(95, 85);
            Endabgabe_Feuerwerk.crc2.lineTo(105, 130);
            Endabgabe_Feuerwerk.crc2.lineTo(75, 110);
            Endabgabe_Feuerwerk.crc2.lineTo(45, 130);
            Endabgabe_Feuerwerk.crc2.lineTo(55, 85);
            Endabgabe_Feuerwerk.crc2.lineTo(55, 85);
            Endabgabe_Feuerwerk.crc2.lineTo(20, 70);
            Endabgabe_Feuerwerk.crc2.lineTo(55, 60);
            Endabgabe_Feuerwerk.crc2.closePath();
            Endabgabe_Feuerwerk.crc2.fillStyle = this.color;
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
        } // draw zu
    } // class zu  
    Endabgabe_Feuerwerk.StarParticle = StarParticle;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=StarParticles.js.map