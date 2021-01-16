"use strict";
var L11_Asteroids;
(function (L11_Asteroids) {
    class Projectiles extends L11_Asteroids.Moveable {
        constructor(_velocity, _position) {
            super(_position);
            this.lifetime = Projectiles.maxLifetime;
            console.log("projectiles constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("asteroids draw");
            L11_Asteroids.crc2.save();
            L11_Asteroids.crc2.translate(this.position.x, this.position.y);
            L11_Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            L11_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    Projectiles.maxLifetime = 2;
    L11_Asteroids.Projectiles = Projectiles;
})(L11_Asteroids || (L11_Asteroids = {}));
//# sourceMappingURL=Projectiles.js.map