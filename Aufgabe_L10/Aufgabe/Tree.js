"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    class Tree {
        constructor() {
            this.position = new L10_Inheritance_Skipiste.Vector(100, 600);
        }
        draw() {
            //Großer Baum links
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(100, 600);
            L10_Inheritance_Skipiste.crc2.lineTo(135, 425);
            L10_Inheritance_Skipiste.crc2.lineTo(170, 600);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "darkgreen";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.restore();
        }
    }
    L10_Inheritance_Skipiste.Tree = Tree;
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {}));
//# sourceMappingURL=Tree.js.map