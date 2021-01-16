"use strict";
var L11_Asteroids;
(function (L11_Asteroids) {
    class Asteroid extends L11_Asteroids.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.velocity = L11_Asteroids.Vector.getRandom(100, 200); //100 - 200 px pro sekunde soll der Asteroid fliegen können
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50;
        }
        draw() {
            //console.log("asteroids draw");
            L11_Asteroids.crc2.save();
            L11_Asteroids.crc2.translate(this.position.x, this.position.y);
            L11_Asteroids.crc2.scale(this.size, this.size); //2 mal für eine gleichmäßige Skalierung in beiden dimensionen x,y
            L11_Asteroids.crc2.translate(-50, -50);
            L11_Asteroids.crc2.lineWidth = L11_Asteroids.lineWidth / this.size;
            L11_Asteroids.crc2.stroke(L11_Asteroids.asteroidPaths[this.type]);
            L11_Asteroids.crc2.restore();
        }
        hit() {
            super.hit();
            let event = new CustomEvent(L11_Asteroids.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            L11_Asteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    L11_Asteroids.Asteroid = Asteroid;
})(L11_Asteroids || (L11_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map