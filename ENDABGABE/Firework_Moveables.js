"use strict";
var Firework;
(function (Firework) {
    class Moveable {
        // public expendable: boolean = false;
        //  public x: number;
        // public y: number;
        constructor(_color, _speed, _positionX, _positionY) {
            this.position = new Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY;
            this.speed = new Vector(0, 0);
            this.speed.x = Math.random();
            this.speed.y = Math.random();
            this.color = _color;
            //this.speed.x = Math.cos(Math.PI * 2) * i
            //console.log("moveable constructor");
            /*
                    if (_position)
                        this.position = _position.copy();
                    else
                        this.position = new Vector (0, 0);
                        
                    this.speed = new Vector (0, 0); */
        }
        move(_timeslice) {
            /* let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); */
        }
        draw() {
            console.log("hallo");
            Firework.crc2.save();
            Firework.crc2.translate(0, 0);
            Firework.crc2.beginPath();
            Firework.crc2.moveTo(0, 0);
            Firework.crc2.lineTo(500, 400);
            Firework.crc2.lineWidth = 500;
            Firework.crc2.fillStyle = "white";
            Firework.crc2.stroke();
            Firework.crc2.restore();
        }
    }
    Firework.Moveable = Moveable;
})(Firework || (Firework = {}));
//# sourceMappingURL=Firework_Moveables.js.map