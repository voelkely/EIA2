"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
    class Lift {
        constructor(_y) {
            console.log("construct Lift");
            this.position = new L09_Classes_Skipiste.Vector(610, 300); //Da muss Punkt von der Verbindung zwischen Wagon und Linierein //300
            this.speed = new L09_Classes_Skipiste.Vector(20, -11); //Ausrichtung an der Linie
        }
        draw() {
            console.log("draw Lift");
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.translate(this.position.x, this.position.y);
            L09_Classes_Skipiste.crc2.translate(-this.position.x, -this.position.y);
            //Wagon
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x - 60, this.position.y + 40, 130, 90);
            L09_Classes_Skipiste.crc2.fillStyle = "#a9c9c9";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = "black";
            L09_Classes_Skipiste.crc2.font = "15px sans-serif";
            L09_Classes_Skipiste.crc2.fillText("SKI LIFT", this.position.x - 30, this.position.y + 120);
            // Verbindung 
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x, this.position.y, 10, 40);
            L09_Classes_Skipiste.crc2.fillStyle = "grey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Rahmen
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Rahmen2
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x + 30, this.position.y + 50, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Rahmen3
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 114, 50);
            L09_Classes_Skipiste.crc2.lineWidth = 2;
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Fenster1
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x - 46, this.position.y + 52, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "lightgrey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Fenster2
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x - 10, this.position.y + 52, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "lightgrey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Fenster3
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(this.position.x + 27, this.position.y + 52, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "lightgrey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            // crc2.save();
            L09_Classes_Skipiste.crc2.restore();
        }
        moveUp(_timeslice) {
            console.log("Lift is going up");
            let offset = new L09_Classes_Skipiste.Vector(this.speed.x, this.speed.y); //Offset ist der Weg
            console.log(offset);
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird auf die position addiert
            console.log(this.position);
        }
        moveDown(_timeslice) {
            let offset = new L09_Classes_Skipiste.Vector(this.speed.x, this.speed.y); //Offset ist der Weg 
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset);
        }
    }
    L09_Classes_Skipiste.Lift = Lift;
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {}));
//# sourceMappingURL=Lift.js.map