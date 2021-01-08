"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Asteroid extends L10_Asteroids.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("asteroids constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Asteroids.Vector(0, 0);
            this.velocity = new L10_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200); //100 - 200 px pro sekunde soll der Asteroid fliegen können
            //randomly choose type (4)
            this.type = Math.floor(Math.random() * 4); //Math.floor schneidet nach kommastellen ab für ein rundes Ergebnis
            //set size to _size
            this.size = _size; //ist die _size die oben angegeben wurde --> es werden nur Zahlen von 1-3 angegeben siehe  Konsole
        }
        draw() {
            //console.log("asteroids draw");
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.scale(this.size, this.size); //2 mal für eine gleichmäßige Skalierung in beiden dimensionen x,y
            L10_Asteroids.crc2.translate(-50, -50);
            L10_Asteroids.crc2.lineWidth = L10_Asteroids.lineWidth / this.size;
            L10_Asteroids.crc2.stroke(L10_Asteroids.asteroidPaths[this.type]);
            L10_Asteroids.crc2.restore();
        }
        isHit(_hostpot) {
            let hitsize = 50 * this.size;
            let difference = new L10_Asteroids.Vector(_hostpot.x - this.position.x, _hostpot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L10_Asteroids.Asteroid = Asteroid;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map