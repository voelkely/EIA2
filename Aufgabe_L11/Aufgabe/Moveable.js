"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Moveable {
        constructor(_position) {
            console.log("moveable constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Skipiste.Vector(0, 0);
            this.speed = new L11_Skipiste.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.speed.copy();
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird mit der position addiert
            if (this.position.x < 0)
                this.position.x += L11_Skipiste.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Skipiste.crc2.canvas.height;
            if (this.position.x > L11_Skipiste.crc2.canvas.width)
                this.position.x -= L11_Skipiste.crc2.canvas.width;
            if (this.position.y > L11_Skipiste.crc2.canvas.height)
                this.position.x -= L11_Skipiste.crc2.canvas.height;
        }
    }
    L11_Skipiste.Moveable = Moveable;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=Moveable.js.map