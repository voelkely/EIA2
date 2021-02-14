"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class Moveable {
        constructor(_color, _speed, _positionX, _positionY, _i, _radius) {
            // console.log("construct rocket");
            this.alpha = 0.2;
            this.expendable = false;
            this.gravity = 0.06;
            this.position = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY;
            this.speed = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.speed.x = Math.cos(_radius * _i) * Math.floor(Math.random() * (20 - 10 + 1) + 10); //5 ist die schnelligkeit
            this.speed.y = Math.sin(_radius * _i) * Math.floor(Math.random() * (10 - 5 + 1) + 10);
            this.color = _color;
        }
        move(_timeslice) {
            let offset = new Endabgabe_Feuerwerk.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.speed.y += this.gravity;
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    } //class zu
    Endabgabe_Feuerwerk.Moveable = Moveable;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=Moveable.js.map