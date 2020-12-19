"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
    class Skier {
        constructor(_size, _y) {
            // console.log("construct skier");
            this.y = _y;
            this.position = new L09_Classes_Skipiste.Vector(0, _y); //Startposition 
            this.speed = new L09_Classes_Skipiste.Vector(110, 200);
            this.color = [] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a", "#f59931", "#8fc7b8", "#edbeea"];
            this.randomColor = this.color[Math.floor(Math.random() * this.color.length)];
            this.skin = "#fce6ac";
        }
        draw() {
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.translate(this.position.x, this.position.y);
            //Head
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = this.skin;
            L09_Classes_Skipiste.crc2.fill();
            //Body
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(-10, 25);
            L09_Classes_Skipiste.crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = this.randomColor;
            L09_Classes_Skipiste.crc2.fill();
            //Ski
            L09_Classes_Skipiste.crc2.lineWidth = 4;
            L09_Classes_Skipiste.crc2.lineCap = "round";
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(-20, 35);
            L09_Classes_Skipiste.crc2.lineTo(4, 48);
            L09_Classes_Skipiste.crc2.moveTo(-11, 34);
            L09_Classes_Skipiste.crc2.lineTo(15, 48);
            L09_Classes_Skipiste.crc2.strokeStyle = "black";
            L09_Classes_Skipiste.crc2.stroke();
            //Legs
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(-6, 25);
            L09_Classes_Skipiste.crc2.lineTo(-4, 33);
            L09_Classes_Skipiste.crc2.lineTo(-11, 40);
            L09_Classes_Skipiste.crc2.moveTo(1, 25);
            L09_Classes_Skipiste.crc2.lineTo(3, 31);
            L09_Classes_Skipiste.crc2.lineTo(0, 39);
            L09_Classes_Skipiste.crc2.lineCap = "round";
            L09_Classes_Skipiste.crc2.lineWidth = 4;
            L09_Classes_Skipiste.crc2.strokeStyle = this.randomColor;
            L09_Classes_Skipiste.crc2.stroke();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.restore();
        }
        move(_timeslice) {
            //console.log("move fahrer");
            let offset = new L09_Classes_Skipiste.Vector(this.speed.x, this.speed.y); //Offset ist der Weg 
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
                this.position = new L09_Classes_Skipiste.Vector(0, this.y);
            }
        }
    }
    L09_Classes_Skipiste.Skier = Skier;
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {}));
//# sourceMappingURL=Skier.js.map