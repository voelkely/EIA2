"use strict";
var L11_Asteroids;
(function (L11_Asteroids) {
    class Moveable {
        constructor(_position) {
            this.expendable = false;
            this.hitRadius = 0;
            console.log("moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_Asteroids.Vector(0, 0);
            this.velocity = new L11_Asteroids.Vector(0, 0);
        }
        isHitBy(_partner) {
            let difference = L11_Asteroids.Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;
            return true;
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird mit der position addiert
            if (this.position.x < 0)
                this.position.x += L11_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Asteroids.crc2.canvas.height;
            if (this.position.x > L11_Asteroids.crc2.canvas.width)
                this.position.x -= L11_Asteroids.crc2.canvas.width;
            if (this.position.y > L11_Asteroids.crc2.canvas.height)
                this.position.x -= L11_Asteroids.crc2.canvas.height;
        }
        hit() {
            this.expendable = true;
        }
    }
    L11_Asteroids.Moveable = Moveable;
})(L11_Asteroids || (L11_Asteroids = {}));
//# sourceMappingURL=Moveable.js.map