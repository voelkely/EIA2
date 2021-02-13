"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class CircleParticle {
        constructor(_color, _speed, _positionX, _positionY) {
            // super( _color, _speed, _positionX, _positionY);
        }
        move(_timeslice) {
            console.log("super move");
            // super(_timeslice);
        }
        draw() {
            console.log("particle drawn");
            Endabgabe_Feuerwerk.crc2.save();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.scale(this.size, this.size);
            Endabgabe_Feuerwerk.crc2.beginPath();
            Endabgabe_Feuerwerk.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Endabgabe_Feuerwerk.crc2.fillStyle = this.color;
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
        } // draw zu
    } //class zu
    Endabgabe_Feuerwerk.CircleParticle = CircleParticle;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu 
//# sourceMappingURL=CircleParticles.js.map