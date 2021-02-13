namespace Endabgabe_Feuerwerk {

    export class Moveable {

        position: Vector;
        speed: Vector;
        color: string;
        amount: number;
        size: string;
        lifetime: number;

        constructor(_color: string, _speed: number, _positionX: number, _positionY: number) {

            console.log("construct Moveable");

            this.position = new Vector(200, 200);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY; 
            this.speed = new Vector(0, 0);
            this.speed.x = Math.random();
            this.speed.y = Math.random();
            this.color = _color;
        }

        draw(): void {
            console.log("draw particle");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 10, 0, 2 * Math.PI, true);
            crc2.fillStyle = "green";
            crc2.fill();

            crc2.restore();

    }

} // class zu

} //namespace zu
