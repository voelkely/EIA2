"use strict";
var L11_Asteroids;
(function (L11_Asteroids) {
    class Hotspot extends L11_Asteroids.Projectiles {
        constructor(_position) {
            super(_position, new L11_Asteroids.Vector(0, 0));
            this.lifetime = Hotspot.maxLifetime;
            this.hitRadius = 25;
        }
        draw() {
            let ratio = this.lifetime / Hotspot.maxLifetime;
            if (ratio < 0)
                return;
            L11_Asteroids.crc2.save();
            L11_Asteroids.crc2.translate(this.position.x, this.position.y);
            L11_Asteroids.crc2.beginPath();
            L11_Asteroids.crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            L11_Asteroids.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L11_Asteroids.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L11_Asteroids.crc2.fill();
            L11_Asteroids.crc2.restore();
        }
        hit() {
            this.lifetime -= Hotspot.maxLifetime / 3;
            this.expendable = this.lifetime < 0;
            console.log("Hotspot hit, remaining range: ", this.lifetime);
        }
    }
    Hotspot.maxLifetime = 0.5;
    L11_Asteroids.Hotspot = Hotspot;
})(L11_Asteroids || (L11_Asteroids = {}));
//# sourceMappingURL=Hotspot.js.map