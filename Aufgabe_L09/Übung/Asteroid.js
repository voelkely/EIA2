"use strict";
var L09_Classes_Asteroids;
(function (L09_Classes_Asteroids) {
    class Asteroid {
        constructor(_size, _position) {
            console.log("asteroids constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Classes_Asteroids.Vector(0, 0);
            //set velocity zustzlich zu function in Vector.ts
            this.velocity = new L09_Classes_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200); //100 - 200 px pro sekunde soll der Asteroid fliegen können
            //randomly choose type (4)
            this.type = Math.floor(Math.random() * 4); //Math.floor schneidet nach kommastellen ab für ein rundes Ergebnis
            //set size to _size
            this.size = _size; //ist die _size die oben angegeben wurde --> es werden nur Zahlen von 1-3 angegeben siehe  Konsole
        }
        move(_timeslice) {
            //console.log("asteroids move");
            //add velocity * _timeslice to position = OFFSET
            let offset = new L09_Classes_Asteroids.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird mit der position addiert
            //Die erste schleife
            if (this.position.x < 0)
                this.position.x += L09_Classes_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Classes_Asteroids.crc2.canvas.height;
            if (this.position.x > L09_Classes_Asteroids.crc2.canvas.width)
                this.position.x -= L09_Classes_Asteroids.crc2.canvas.width;
            if (this.position.y > L09_Classes_Asteroids.crc2.canvas.height)
                this.position.x -= L09_Classes_Asteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("asteroids draw");
            L09_Classes_Asteroids.crc2.save();
            L09_Classes_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Classes_Asteroids.crc2.scale(this.size, this.size); //2 mal für eine gleichmäßige Skalierung in beiden dimensionen x,y
            L09_Classes_Asteroids.crc2.translate(-50, -50);
            L09_Classes_Asteroids.crc2.stroke(L09_Classes_Asteroids.asteroidPaths[this.type]);
            L09_Classes_Asteroids.crc2.restore();
        }
        isHit(_hostpot) {
            let hitsize = 50 * this.size;
            let difference = new L09_Classes_Asteroids.Vector(_hostpot.x - this.position.x, _hostpot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L09_Classes_Asteroids.Asteroid = Asteroid;
})(L09_Classes_Asteroids || (L09_Classes_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map