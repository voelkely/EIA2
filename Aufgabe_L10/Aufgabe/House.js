"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    class House {
        constructor() {
            this.position = new L10_Inheritance_Skipiste.Vector(200, 450);
        }
        draw() {
            //Hütte
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(200, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
            let gradient = L10_Inheritance_Skipiste.crc2.createLinearGradient(0, 50, 0, 390);
            L10_Inheritance_Skipiste.crc2.fillStyle = gradient;
            L10_Inheritance_Skipiste.crc2.fillStyle = "#5c4411";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.save();
            //Fenster
            L10_Inheritance_Skipiste.crc2.fillStyle = "#d3e6e6";
            L10_Inheritance_Skipiste.crc2.fillRect(225, 475, 100, 60);
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.fillStyle = "black";
            L10_Inheritance_Skipiste.crc2.font = "10px sans-serif";
            L10_Inheritance_Skipiste.crc2.fillText("KASSE SKI LIFT", 230, 485);
            //Dach
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(200, 450);
            L10_Inheritance_Skipiste.crc2.lineTo(275, 400);
            L10_Inheritance_Skipiste.crc2.lineTo(350, 450);
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.lineWidth = 15;
            L10_Inheritance_Skipiste.crc2.lineCap = "round";
            L10_Inheritance_Skipiste.crc2.strokeStyle = "#d3e6e6";
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.restore();
            //Eiszapfen groß
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(205, 456);
            L10_Inheritance_Skipiste.crc2.lineTo(210, 525);
            L10_Inheritance_Skipiste.crc2.lineTo(215, 456);
            L10_Inheritance_Skipiste.crc2.lineWidth = 2;
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            //Eiszapfen klein
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(220, 456);
            L10_Inheritance_Skipiste.crc2.lineTo(222, 500);
            L10_Inheritance_Skipiste.crc2.lineTo(225, 456);
            L10_Inheritance_Skipiste.crc2.lineWidth = 2;
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            //Eiszapfen klein rechts
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(330, 456);
            L10_Inheritance_Skipiste.crc2.lineTo(333, 500);
            L10_Inheritance_Skipiste.crc2.lineTo(336, 456);
            L10_Inheritance_Skipiste.crc2.lineWidth = 2;
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            //Schneehaufen an der Hütte
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.arc(355, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(325, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(300, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(290, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(275, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(255, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(235, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(217, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(200, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.restore();
        }
    }
    L10_Inheritance_Skipiste.House = House;
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {}));
//# sourceMappingURL=House.js.map