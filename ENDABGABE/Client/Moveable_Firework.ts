namespace Endabgabe_Feuerwerk {

    export class Moveable {

        position: Vector;
        speed: Vector;
        color: string;
        amount: number;
        size: number;
        lifetime: number;


        constructor(_color: string, _speed: number, _positionX: number, _positionY: number, _i: number) {

            console.log("construct Moveable");

            this.position = new Vector(200, 200);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY; 
            this.speed = new Vector(0, 0);
            this.speed.x = Math.cos(Math.PI * 2 / 10) * _i * Math.random() * 8;
            this.speed.y = Math.sin(Math.PI * 2 / 10) * _i * Math.random() * 8;
        
            this.color = _color;
        }

        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);

        }

        draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI, true);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();

        }
        
            


    

} // class zu

} //namespace zu
