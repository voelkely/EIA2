"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class CircleParticle extends Endabgabe_Feuerwerk.Moveable {
        constructor(_color, _speed, _positionX, _positionY, _i, _offset) {
            super(_color, _speed, _positionX, _positionY, _i, _offset);
            //this.shape = _shape;
        }
        move(_timeslice) {
            console.log("super move");
            super.move(_timeslice);
        }
        draw() {
            console.log("circle particle drawn");
            Endabgabe_Feuerwerk.crc2.save();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.scale(this.size, this.size);
            Endabgabe_Feuerwerk.crc2.globalAlpha = this.alpha;
            Endabgabe_Feuerwerk.crc2.beginPath();
            Endabgabe_Feuerwerk.crc2.arc(0, 0, 3, 0, 2 * Math.PI, true);
            Endabgabe_Feuerwerk.crc2.fillStyle = this.color;
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
            /*  case "star":
                 crc2.save();
                 crc2.beginPath();
                 crc2.translate(this.position.x, this.position.y);
                 crc2.globalAlpha = this.alpha;

                 crc2.scale(0.1, 0.1);
                 crc2.moveTo(75, 30);
                 crc2.lineTo(90, 60);
                 crc2.lineTo(125, 75);
                 crc2.lineTo(95, 85);
                 crc2.lineTo(105, 130);
                 crc2.lineTo(75, 110);
                 crc2.lineTo(45, 130);
                 crc2.lineTo(55, 85);
                 crc2.lineTo(55, 85);
                 crc2.lineTo(20, 70);
                 crc2.lineTo(55, 60);
                 crc2.closePath();
                 crc2.fillStyle = this.color;
                 crc2.fill();
         
                 crc2.restore();

                 break;
  */
        } // draw zu
    } //class zu
    Endabgabe_Feuerwerk.CircleParticle = CircleParticle;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu 
//# sourceMappingURL=CircleParticles.js.map