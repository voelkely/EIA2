"use strict";
var Firework;
(function (Firework) {
    class Moveable {
        constructor(_position) {
            console.log("moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Firework.Vector(0, 0);
            this.speed = new Firework.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.speed.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    Moveable.gravity = 1;
    Firework.Moveable = Moveable;
})(Firework || (Firework = {}));
//# sourceMappingURL=Firework_Moveables.js.map