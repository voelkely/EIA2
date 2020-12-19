"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
    class Lift {
        constructor() {
            console.log("construct Lift");
            this.position = new L09_Classes_Skipiste.Vector(600, 325); //Startposition meines Lifts
            this.speed = new L09_Classes_Skipiste.Vector(110, 200);
        }
        draw() {
            console.log("draw Lift");
            //Wagon
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(550, 340, 130, 90);
            L09_Classes_Skipiste.crc2.fillStyle = "#a9c9c9";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = "black";
            L09_Classes_Skipiste.crc2.font = "15px sans-serif";
            L09_Classes_Skipiste.crc2.fillText("SKI LIFT", 580, 415);
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.restore();
            // Verbindung 
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(610, 300, 10, 40);
            L09_Classes_Skipiste.crc2.fillStyle = "grey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Rahmen
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(570, 350, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Rahmen2
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(610, 350, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Rahmen3
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(558, 348, 114, 50);
            L09_Classes_Skipiste.crc2.lineWidth = 2;
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Fenster1
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(560, 350, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "lightgrey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Fenster2
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(600, 350, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "lightgrey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            //Fenster3
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(640, 350, 30, 45);
            L09_Classes_Skipiste.crc2.fillStyle = "lightgrey";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.restore();
        }
        moveUp(_timeslice) {
            console.log("Lift is going up");
            let offset = new L09_Classes_Skipiste.Vector(this.speed.x, this.speed.y); //Offset ist der Weg 
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird auf die position addiert
        }
    }
    L09_Classes_Skipiste.Lift = Lift;
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {}));
//# sourceMappingURL=Lift.js.map