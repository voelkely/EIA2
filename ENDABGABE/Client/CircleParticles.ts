namespace Endabgabe_Feuerwerk {

    export class CircleParticle extends Moveable  { // extends Particle

    
        shape: string;


        constructor(_color: string, _speed: number, _positionX: number, _positionY: number, _i: number, _offset: number) {

          super(_color, _speed, _positionX, _positionY, _i, _offset);

          //this.shape = _shape;
         
        }

        move(_timeslice: number): void {
            console.log("super move");

            super.move(_timeslice);

        }

     
        draw(): void {
            console.log("circle particle drawn");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.globalAlpha = this.alpha;


            crc2.beginPath();
            crc2.arc(0, 0, 3, 0, 2 * Math.PI, true);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();

            
             /*  case "star":
                  crc2.save();
                  crc2.beginPath();
                  crc2.translate(this.position.x, this.position.y);
                  crc2.globalAlpha = this.alpha;

                  crc2.scale(0.1, 0.1);
                  crc2.moveTo(75, 30);
                  crc2.lineTo(90, 60);
                  crc2.lineTo(125, 75);
                  crc2.lineTo(95, 85);
                  crc2.lineTo(105, 130);
                  crc2.lineTo(75, 110);
                  crc2.lineTo(45, 130);
                  crc2.lineTo(55, 85);
                  crc2.lineTo(55, 85);
                  crc2.lineTo(20, 70);
                  crc2.lineTo(55, 60);
                  crc2.closePath();
                  crc2.fillStyle = this.color;
                  crc2.fill();
          
                  crc2.restore();

                  break;
   */


           

        }// draw zu
        
    } //class zu


} //namespace zu 






