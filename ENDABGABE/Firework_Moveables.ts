namespace Firework {

    export abstract class Moveable {

        private static gravity: number = 1;
        public position: Vector;
        public speed: Vector;
        public expendables: boolean;
        public pointer: Vector;
        public color: string;
        public lifetime: number; 
        private amount: number;
        private size: string;
        
         
        constructor( _position?: Vector) { 
            console.log("moveable constructor");
    
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector (0, 0); 
                
            this.speed = new Vector (0, 0);
           
        }
    
        public move(_timeslice: number): void {
            
            let offset: Vector = this.speed.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        
            
        }
    
        public abstract draw(): void;
           
    
        }
    }