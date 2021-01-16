"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Tree {
        constructor() {
            this.position = new L11_Skipiste.Vector(100, 600);
        }
        draw() {
            //Großer Baum links
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(100, 600);
            L11_Skipiste.crc2.lineTo(135, 425);
            L11_Skipiste.crc2.lineTo(170, 600);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "darkgreen";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.restore();
        }
    }
    L11_Skipiste.Tree = Tree;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=Tree.js.map