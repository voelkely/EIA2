"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class Rockets {
        constructor(_color, _speed, _positionX, _positionY, _i, _offset) {
            this.gravity = 1;
            this.alpha = 0.3;
            console.log("construct Moveable");
            this.position = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY;
            this.speed = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.speed.x = Math.cos(_offset * _i) * Math.floor(Math.random() * (50 - 40 + 1) + 5); //10 ist die schnelligkeit
            this.speed.y = Math.sin(_offset * _i) * Math.floor(Math.random() * (40 - 30 + 1) + 5);
            // this.color = _color;
            this.speed.y += this.gravity;
            this.speed.x += this.gravity;
            this.color = [] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a", "#f59931", "#8fc7b8", "#edbeea"];
            this.randomColor = this.color[Math.floor(Math.random() * this.color.length)];
            //this.size = _size;
        }
        move(_timeslice) {
            let offset = new Endabgabe_Feuerwerk.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
        draw() {
            Endabgabe_Feuerwerk.crc2.save();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.scale(this.size, this.size);
            Endabgabe_Feuerwerk.crc2.globalAlpha = this.alpha;
            Endabgabe_Feuerwerk.crc2.beginPath();
            Endabgabe_Feuerwerk.crc2.arc(0, 0, 2, 0, 2 * Math.PI, true);
            Endabgabe_Feuerwerk.crc2.fillStyle = this.randomColor;
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
        }
    } // class zu
    Endabgabe_Feuerwerk.Rockets = Rockets;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=Rocket.js.map