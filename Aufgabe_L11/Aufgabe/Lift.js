"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Lift {
        constructor() {
            //console.log("construct Lift");
            this.position = new L11_Skipiste.Vector(610, 300);
            this.speed = new L11_Skipiste.Vector(20, -11);
            this.hitRadius = 50;
        }
        draw() {
            // console.log("draw Lift");
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.position.x, this.position.y);
            L11_Skipiste.crc2.translate(-this.position.x, -this.position.y);
            //Wagon
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 60, this.position.y + 40, 130, 90);
            L11_Skipiste.crc2.fillStyle = "#a9c9c9";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "black";
            L11_Skipiste.crc2.font = "15px sans-serif";
            L11_Skipiste.crc2.fillText("SKI LIFT", this.position.x - 30, this.position.y + 120);
            // Verbindung 
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x, this.position.y, 10, 40);
            L11_Skipiste.crc2.fillStyle = "grey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Rahmen
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 30, 45);
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Rahmen2
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x + 30, this.position.y + 50, 30, 45);
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Rahmen3
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 114, 50);
            L11_Skipiste.crc2.lineWidth = 2;
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Fenster1
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 46, this.position.y + 52, 30, 45);
            L11_Skipiste.crc2.fillStyle = "lightgrey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Fenster2
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 10, this.position.y + 52, 30, 45);
            L11_Skipiste.crc2.fillStyle = "lightgrey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Fenster3
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x + 27, this.position.y + 52, 30, 45);
            L11_Skipiste.crc2.fillStyle = "lightgrey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            // crc2.save();
            L11_Skipiste.crc2.restore();
        }
        moveUp(_timeslice) {
            if (L11_Skipiste.clickStop == false) {
                //wenn der Lift sich bewegt ohne getroffen worden zu sein dann...
                let offset = new L11_Skipiste.Vector(this.speed.x, this.speed.y);
                offset.scale(_timeslice);
                this.position.add(offset);
            }
            if (L11_Skipiste.clickStop == true) {
                //falls der Lift getroffen wurde sollte er stoppen...
                this.position = new L11_Skipiste.Vector(this.position.x, this.position.y);
                //let offset: Vector = new Vector(this.speed.x, this.speed.y);
                // offset.scale(_timeslice); 
                // this.position.add(offset && newPosition);
                //}
            } //class zu 
        }
    }
    L11_Skipiste.Lift = Lift;
})(L11_Skipiste || (L11_Skipiste = {})); //namespace zu
//# sourceMappingURL=Lift.js.map