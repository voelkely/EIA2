namespace Endabgabe_Feuerwerk {

    export class Rocket {

        position: Vector;
        speed: Vector;
        color: string;
        amount: number;
        size: string;
        lifetime: number;

        constructor(_position: Vector) {
            console.log("construct particle");
            this.position = new Vector (300, 400);
            this.speed = new Vector (0, 0);
            this.speed.random(100, 200);

        
        }

        move(_timeslice: number): void {
           // console.log("move particle");
            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > 0)
                this.position.x -= crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y -= crc2.canvas.height;

    
        }

        draw(): void {
           // console.log("draw particle");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 10, 0, 2 * Math.PI, true);
            crc2.fillStyle = "blue";
            crc2.fill();

            crc2.restore();

            
        }

        
       

    }
}