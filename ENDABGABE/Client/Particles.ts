/* namespace Firework {

    export class Particle extends Moveable {

        //speed2: number;
        //color: string;
       // radius: number;
       // alpha: number = 1;
       // lifetime: number;


        constructor( _color: string, _speed: number, _positionX: number, _positionY: number ) {

           super( _color, _speed, _positionX, _positionY);
         

        }

        move(_timeslice: number): void {
            console.log("move");

            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }

     
        draw(): void {
            console.log("particle drawn");
            crc2.save();   
            crc2.globalAlpha = this.alpha;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        
        }
        
    } //class zu


} //namespace zu */






