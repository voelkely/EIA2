"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class Moveable {
        constructor(_color, _speed, _positionX, _positionY, _i, _offset) {
            this.lifetime = 20;
            this.alpha = 0.3;
            console.log("construct rocket");
            this.position = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY;
            this.speed = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.speed.x = Math.cos(_offset * _i) * Math.floor(Math.random() * (30 - 20 + 1) + 5); //10 ist die schnelligkeit
            this.speed.y = Math.sin(_offset * _i) * Math.floor(Math.random() * (20 - 10 + 1) + 5);
            this.color = _color;
            // this.shape = _shape;     
        }
        move(_timeslice) {
            let offset = new Endabgabe_Feuerwerk.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    Endabgabe_Feuerwerk.Moveable = Moveable;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {}));
//# sourceMappingURL=Moveable.js.map