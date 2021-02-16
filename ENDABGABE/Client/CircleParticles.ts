namespace Endabgabe_Feuerwerk {

    export class CircleParticle extends Moveable  { 


        constructor(_color: string, _speed: number, _positionX: number, _positionY: number, _amount: number, _radius: number, _shape: string) {

          super(_color, _speed, _positionX, _positionY, _amount, _radius, _shape);
         
        }

        move(_timeslice: number): void {
           // console.log("super move");

            super.move(_timeslice);

        }

     
        draw(): void {
           // console.log("circle particle drawn");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.globalAlpha = this.alpha;

            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI, true);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore(); 
          

        }// draw zu
        
    } //class zu


} //namespace zu 

/*Abschlussabgabe Yvonne N. Voelkel / MKB / 262629 */






