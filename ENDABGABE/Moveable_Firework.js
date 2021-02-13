"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class Moveable {
        constructor(_color, _speed, _positionX, _positionY) {
            console.log("construct Moveable");
            this.position = new Endabgabe_Feuerwerk.Vector(200, 200);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY;
            this.speed = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.speed.x = Math.random();
            this.speed.y = Math.random();
            this.color = _color;
        }
        draw() {
            console.log("draw particle");
            Endabgabe_Feuerwerk.crc2.save();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.arc(0, 0, 10, 0, 2 * Math.PI, true);
            Endabgabe_Feuerwerk.crc2.fillStyle = "green";
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
        }
    } // class zu
    Endabgabe_Feuerwerk.Moveable = Moveable;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=Moveable_Firework.js.map