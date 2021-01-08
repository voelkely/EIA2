"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    class Skier extends L10_Inheritance_Skipiste.Moveable {
        constructor(_y, _position) {
            super(_position);
            this.y = _y;
            this.position = new L10_Inheritance_Skipiste.Vector(0, _y); //Startposition 
            this.speed = new L10_Inheritance_Skipiste.Vector(110, 200);
            this.color = [] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a", "#f59931", "#8fc7b8", "#edbeea"];
            this.randomColor = this.color[Math.floor(Math.random() * this.color.length)];
            this.skin = "#fce6ac";
        }
        draw() {
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.translate(this.position.x, this.position.y);
            //Head
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = this.skin;
            L10_Inheritance_Skipiste.crc2.fill();
            //Body
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(-10, 25);
            L10_Inheritance_Skipiste.crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = this.randomColor;
            L10_Inheritance_Skipiste.crc2.fill();
            //Ski
            L10_Inheritance_Skipiste.crc2.lineWidth = 4;
            L10_Inheritance_Skipiste.crc2.lineCap = "round";
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(-20, 35);
            L10_Inheritance_Skipiste.crc2.lineTo(4, 48);
            L10_Inheritance_Skipiste.crc2.moveTo(-11, 34);
            L10_Inheritance_Skipiste.crc2.lineTo(15, 48);
            L10_Inheritance_Skipiste.crc2.strokeStyle = "black";
            L10_Inheritance_Skipiste.crc2.stroke();
            //Legs
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(-6, 25);
            L10_Inheritance_Skipiste.crc2.lineTo(-4, 33);
            L10_Inheritance_Skipiste.crc2.lineTo(-11, 40);
            L10_Inheritance_Skipiste.crc2.moveTo(1, 25);
            L10_Inheritance_Skipiste.crc2.lineTo(3, 31);
            L10_Inheritance_Skipiste.crc2.lineTo(0, 39);
            L10_Inheritance_Skipiste.crc2.lineCap = "round";
            L10_Inheritance_Skipiste.crc2.lineWidth = 4;
            L10_Inheritance_Skipiste.crc2.strokeStyle = this.randomColor;
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.restore();
        }
        move(_timeslice) {
            //console.log("move fahrer");
            let offset = new L10_Inheritance_Skipiste.Vector(this.speed.x, this.speed.y); //Offset ist der Weg 
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird auf die position addiert
            let x;
            if (this.position.x > 300 && this.position.y < 600) {
                this.position.x = 90; //Startposition des Fahrers?
            }
            if (this.position.x < 15) {
                x = 20 - this.position.x;
                this.position.x += x;
            }
            if (this.position.y >= 600) {
                this.position = new L10_Inheritance_Skipiste.Vector(0, this.y);
            }
        }
    }
    L10_Inheritance_Skipiste.Skier = Skier;
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {}));
//# sourceMappingURL=Skier.js.map