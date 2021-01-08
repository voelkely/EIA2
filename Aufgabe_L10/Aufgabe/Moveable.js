"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    class Moveable {
        constructor(_position) {
            console.log("moveable constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Inheritance_Skipiste.Vector(0, 0); // was kommt da rein?
            this.speed = new L10_Inheritance_Skipiste.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.speed.copy();
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird mit der position addiert
            if (this.position.x < 0)
                this.position.x += L10_Inheritance_Skipiste.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Inheritance_Skipiste.crc2.canvas.height;
            if (this.position.x > L10_Inheritance_Skipiste.crc2.canvas.width)
                this.position.x -= L10_Inheritance_Skipiste.crc2.canvas.width;
            if (this.position.y > L10_Inheritance_Skipiste.crc2.canvas.height)
                this.position.x -= L10_Inheritance_Skipiste.crc2.canvas.height;
        }
        draw() {
            //console.log("moveable draw");
        }
    }
    L10_Inheritance_Skipiste.Moveable = Moveable;
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {}));
//# sourceMappingURL=Moveable.js.map