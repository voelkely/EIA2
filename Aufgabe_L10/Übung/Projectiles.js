"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Projectiles extends L10_Asteroids.Moveable {
        constructor(_velocity, _position) {
            super(_position);
            this.lifetime = 2;
            console.log("projectiles constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("asteroids draw");
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            L10_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    L10_Asteroids.Projectiles = Projectiles;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Projectiles.js.map