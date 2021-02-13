namespace Firework {

    export class Moveable {

       // private static gravity: number = 1;
        public position: Vector;
        public speed: Vector;
        public color: string;
       // public expendable: boolean = false;
      //  public x: number;
       // public y: number;
         
        constructor(_color: string, _speed: number, _positionX: number, _positionY: number ) { 

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
    
        public move(_timeslice: number): void {
            
            /* let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); */

           
        
            
        }
    
        public draw(): void {
            console.log("hallo");

            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(500, 400);
            crc2.lineWidth = 500;
            crc2.fillStyle = "white";
            crc2.stroke();
            crc2.restore();
        }
           
    
        }
    }