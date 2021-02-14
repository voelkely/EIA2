namespace Endabgabe_Feuerwerk {

    export abstract class Moveable {

        public position: Vector;
        public speed: Vector;
        public color: string;
        public amount: number;
        public lifetime: number;
        public size: number;
        public alpha: number = 0.2;
    

        public expendable: boolean = false; 
        public gravity: number = 0.06;
        
       

        constructor(_color: string, _speed: number, _positionX: number, _positionY: number, _i: number, _radius: number) {

           // console.log("construct rocket");

            this.position = new Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY; 
            this.speed = new Vector(0, 0);
            this.speed.x = Math.cos(_radius * _i) * Math.floor(Math.random() * (20 - 10 + 1) + 10); //5 ist die schnelligkeit
            this.speed.y = Math.sin(_radius * _i) * Math.floor(Math.random() * (10 - 5 + 1) + 10); 
           
            this.color = _color;    
            
    }

    public move(_timeslice: number): void {
        
        let offset: Vector = new Vector(this.speed.x, this.speed.y);
        offset.scale(_timeslice);
        this.position.add(offset);

        this.speed.y += this.gravity;

        this.lifetime -= _timeslice;
        if (this.lifetime < 0)
            this.expendable = true;
        
    }

    public abstract draw(): void;
       

    }//class zu

}//namespace zu