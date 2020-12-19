"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
    class Tree {
        constructor() {
            this.position = new L09_Classes_Skipiste.Vector(100, 600);
        }
        draw() {
            //Großer Baum links
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.moveTo(100, 600);
            L09_Classes_Skipiste.crc2.lineTo(135, 425);
            L09_Classes_Skipiste.crc2.lineTo(170, 600);
            L09_Classes_Skipiste.crc2.closePath();
            L09_Classes_Skipiste.crc2.fillStyle = "darkgreen";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.restore();
        }
    }
    L09_Classes_Skipiste.Tree = Tree;
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {}));
//# sourceMappingURL=Tree.js.map