"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
    class House {
        constructor() {
            this.position = new L09_Classes_Skipiste.Vector(200, 450);
        }
        draw() {
            //Hütte
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.rect(200, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
            let gradient = L09_Classes_Skipiste.crc2.createLinearGradient(0, 50, 0, 390);
            L09_Classes_Skipiste.crc2.fillStyle = gradient;
            L09_Classes_Skipiste.crc2.fillStyle = "#5c4411";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.save();
            //Fenster
            L09_Classes_Skipiste.crc2.fillStyle = "#d3e6e6";
            L09_Classes_Skipiste.crc2.fillRect(225, 475, 100, 60);
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.fillStyle = "black";
            L09_Classes_Skipiste.crc2.font = "10px sans-serif";
            L09_Classes_Skipiste.crc2.fillText("KASSE SKI LIFT", 230, 485);
            //Dach
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(200, 450);
            L09_Classes_Skipiste.crc2.lineTo(275, 400);
            L09_Classes_Skipiste.crc2.lineTo(350, 450);
            L09_Classes_Skipiste.crc2.stroke();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.lineWidth = 15;
            L09_Classes_Skipiste.crc2.lineCap = "round";
            L09_Classes_Skipiste.crc2.strokeStyle = "#d3e6e6";
            L09_Classes_Skipiste.crc2.stroke();
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.restore();
            //Eiszapfen groß
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(205, 456);
            L09_Classes_Skipiste.crc2.lineTo(210, 525);
            L09_Classes_Skipiste.crc2.lineTo(215, 456);
            L09_Classes_Skipiste.crc2.lineWidth = 2;
            L09_Classes_Skipiste.crc2.stroke();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            //Eiszapfen klein
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(220, 456);
            L09_Classes_Skipiste.crc2.lineTo(222, 500);
            L09_Classes_Skipiste.crc2.lineTo(225, 456);
            L09_Classes_Skipiste.crc2.lineWidth = 2;
            L09_Classes_Skipiste.crc2.stroke();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            //Eiszapfen klein rechts
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(330, 456);
            L09_Classes_Skipiste.crc2.lineTo(333, 500);
            L09_Classes_Skipiste.crc2.lineTo(336, 456);
            L09_Classes_Skipiste.crc2.lineWidth = 2;
            L09_Classes_Skipiste.crc2.stroke();
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            //Schneehaufen an der Hütte
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.arc(355, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(325, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(300, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(290, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(275, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(255, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(235, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(217, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.arc(200, 600, 15, 0, 2 * Math.PI);
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.restore();
        }
    }
    L09_Classes_Skipiste.House = House;
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {}));
//# sourceMappingURL=House.js.map