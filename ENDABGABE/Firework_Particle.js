"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    class Rocket {
        constructor(_position) {
            console.log("construct particle");
            this.position = new Endabgabe_Feuerwerk.Vector(300, 400);
            this.speed = new Endabgabe_Feuerwerk.Vector(0, 0);
            this.speed.random(100, 200);
        }
        move(_timeslice) {
            // console.log("move particle");
            let offset = new Endabgabe_Feuerwerk.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Endabgabe_Feuerwerk.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Endabgabe_Feuerwerk.crc2.canvas.height;
            if (this.position.x > 0)
                this.position.x -= Endabgabe_Feuerwerk.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y -= Endabgabe_Feuerwerk.crc2.canvas.height;
        }
        draw() {
            // console.log("draw particle");
            Endabgabe_Feuerwerk.crc2.save();
            Endabgabe_Feuerwerk.crc2.translate(this.position.x, this.position.y);
            Endabgabe_Feuerwerk.crc2.arc(0, 0, 10, 0, 2 * Math.PI, true);
            Endabgabe_Feuerwerk.crc2.fillStyle = "blue";
            Endabgabe_Feuerwerk.crc2.fill();
            Endabgabe_Feuerwerk.crc2.restore();
        }
    }
    Endabgabe_Feuerwerk.Rocket = Rocket;
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {}));
//# sourceMappingURL=Firework_Particle.js.map