"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Skier extends L11_Skipiste.Moveable {
        constructor(_y, _position) {
            super(_position);
            this.y = _y;
            this.position = new L11_Skipiste.Vector(0, _y); //Startposition 
            this.speed = new L11_Skipiste.Vector(110, 200);
            this.color = [] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a", "#f59931", "#8fc7b8", "#edbeea"];
            this.randomColor = this.color[Math.floor(Math.random() * this.color.length)];
            this.skin = "#fce6ac";
            this.hitRadius = 20;
        }
        draw() {
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.position.x, this.position.y);
            //Head
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = this.skin;
            L11_Skipiste.crc2.fill();
            //Body
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-10, 25);
            L11_Skipiste.crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = this.randomColor;
            L11_Skipiste.crc2.fill();
            //Ski
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-20, 35);
            L11_Skipiste.crc2.lineTo(4, 48);
            L11_Skipiste.crc2.moveTo(-11, 34);
            L11_Skipiste.crc2.lineTo(15, 48);
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.stroke();
            //Legs
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-6, 25);
            L11_Skipiste.crc2.lineTo(-4, 33);
            L11_Skipiste.crc2.lineTo(-11, 40);
            L11_Skipiste.crc2.moveTo(1, 25);
            L11_Skipiste.crc2.lineTo(3, 31);
            L11_Skipiste.crc2.lineTo(0, 39);
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.strokeStyle = this.randomColor;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.restore();
        }
        move(_timeslice) {
            //console.log("move fahrer");
            let offset = new L11_Skipiste.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            let x;
            if (this.position.x > 300 && this.position.y < 600) {
                this.position.x = 90;
            }
            if (this.position.x < 15) {
                x = 20 - this.position.x;
                this.position.x += x;
            }
            if (this.position.y >= 600) {
                this.position = new L11_Skipiste.Vector(0, this.y);
            }
        } //public move zu 
    } //Class zu
    L11_Skipiste.Skier = Skier;
})(L11_Skipiste || (L11_Skipiste = {})); //namesapce zu
//# sourceMappingURL=Skier.js.map