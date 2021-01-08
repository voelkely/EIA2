"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    class Lift {
        constructor() {
            //console.log("construct Lift");
            this.position = new L10_Inheritance_Skipiste.Vector(610, 300); //Da muss Punkt von der Verbindung zwischen Wagon und Linierein //300
            this.speed = new L10_Inheritance_Skipiste.Vector(20, -11); //Ausrichtung an der Linie
        }
        draw() {
            console.log("draw Lift");
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance_Skipiste.crc2.translate(-this.position.x, -this.position.y);
            //Wagon
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x - 60, this.position.y + 40, 130, 90);
            L10_Inheritance_Skipiste.crc2.fillStyle = "#a9c9c9";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "black";
            L10_Inheritance_Skipiste.crc2.font = "15px sans-serif";
            L10_Inheritance_Skipiste.crc2.fillText("SKI LIFT", this.position.x - 30, this.position.y + 120);
            // Verbindung 
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x, this.position.y, 10, 40);
            L10_Inheritance_Skipiste.crc2.fillStyle = "grey";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            //Rahmen
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 30, 45);
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            //Rahmen2
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x + 30, this.position.y + 50, 30, 45);
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            //Rahmen3
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 114, 50);
            L10_Inheritance_Skipiste.crc2.lineWidth = 2;
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            //Fenster1
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x - 46, this.position.y + 52, 30, 45);
            L10_Inheritance_Skipiste.crc2.fillStyle = "lightgrey";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            //Fenster2
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x - 10, this.position.y + 52, 30, 45);
            L10_Inheritance_Skipiste.crc2.fillStyle = "lightgrey";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            //Fenster3
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(this.position.x + 27, this.position.y + 52, 30, 45);
            L10_Inheritance_Skipiste.crc2.fillStyle = "lightgrey";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.closePath();
            // crc2.save();
            L10_Inheritance_Skipiste.crc2.restore();
        }
        moveUp(_timeslice) {
            console.log("Lift is going up");
            let offset = new L10_Inheritance_Skipiste.Vector(this.speed.x, this.speed.y); //Offset ist der Weg
            // console.log(offset);
            offset.scale(_timeslice);
            this.position.add(offset);
            //  console.log(this.position);
        }
    }
    L10_Inheritance_Skipiste.Lift = Lift;
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {}));
//# sourceMappingURL=Lift.js.map