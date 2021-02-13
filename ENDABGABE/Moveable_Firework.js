"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class Moveable {
        constructor(_color, _speed, _positionX, _positionY, _i) {
            console.log("construct Moveable");
            this.position = new Endabgabe_Feuerwerk.Vector(200, 200);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY;
            this.speed = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.speed.x = Math.cos(Math.PI * 2 / 10) * _i * Math.random() * 8;
            this.speed.y = Math.sin(Math.PI * 2 / 10) * _i * Math.random() * 8;
            this.color = _color;
        }
        move(_timeslice) {
            let offset = new Endabgabe_Feuerwerk.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw() {
            Endabgabe_Feuerwerk.crc2.save();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.scale(this.size, this.size);
            Endabgabe_Feuerwerk.crc2.beginPath();
            Endabgabe_Feuerwerk.crc2.arc(0, 0, 5, 0, 2 * Math.PI, true);
            Endabgabe_Feuerwerk.crc2.fillStyle = this.color;
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
        }
    } // class zu
    Endabgabe_Feuerwerk.Moveable = Moveable;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=Moveable_Firework.js.map