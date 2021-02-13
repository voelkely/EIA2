namespace Endabgabe_Feuerwerk {

    export class CircleParticle { //1.SUBKLASSE VON ROCKETS

    
        position: Vector;
        speed: Vector;
        color: string;
        randomColor: string;
        amount: number;
        shape: string;
        lifetime: number;
        size: number;


        constructor( _color: string, _speed: number, _positionX: number, _positionY: number ) {

          // super( _color, _speed, _positionX, _positionY);
         

        }

        move(_timeslice: number): void {
            console.log("super move");

          // super(_timeslice);
        }

     
        draw(): void {
            console.log("particle drawn");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();

        }// draw zu
        
    } //class zu


} //namespace zu 






