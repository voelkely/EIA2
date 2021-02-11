namespace Firework {

    export class Particles {
    
        shape: String;
        position: Vector;
        x: number;
        y: number;
        speed: Vector;
        color: string;
        radius: number;

        constructor(_x: number, _y: number, _radius: number, _color: string) {
         
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
            this.color = _color;

        }

        move(_timeslice: number): void {
            console.log("move");
        }
     


    draw(): void {
        console.log("particle drawn");
        crc2.save();   
        crc2.beginPath();
        crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        

    }
        
    }


    }



}


