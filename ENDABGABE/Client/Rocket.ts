namespace Endabgabe_Feuerwerk {

    export abstract class Rockets { //SUPERKLASSE

        public position: Vector;
        public speed: Vector;
        public color: string;
        public amount: number;
        shape: string;
        public lifetime: number = 20;
        public size: number;

        expendable: boolean; 
        alpha: number = 0.3;


        constructor(_color: string, _speed: number, _positionX: number, _positionY: number, _i: number, _offset: number, _shape: string) {

            console.log("construct rocket");

            this.position = new Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY; 
            this.speed = new Vector(0, 0);
            this.speed.x = Math.cos(_offset * _i) * Math.floor(Math.random() * (30 - 20 + 1) + 5); //10 ist die schnelligkeit
            this.speed.y = Math.sin(_offset * _i) * Math.floor(Math.random() * (20 - 10 + 1) + 5);
        
           
            this.color = _color;
            this.shape = _shape;
            
        

        } //Interface + constructor zu

        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
 
        } //move zu

        public abstract draw(): void;

            /* crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.globalAlpha = this.alpha;

            crc2.beginPath();  
            crc2.arc(0, 0, 3, 0, 2 * Math.PI, true);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();
        } */
            

        
        
    } // class zu

} //namespace zu


