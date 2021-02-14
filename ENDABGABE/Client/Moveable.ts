namespace Endabgabe_Feuerwerk {

    export abstract class Moveable {

        public position: Vector;
        public speed: Vector;
        public color: string;
        public amount: number;
        shape: string;
        public lifetime: number = 20;
        public size: number;

        expendable: boolean; 
        alpha: number = 0.3;

        constructor(_color: string, _speed: number, _positionX: number, _positionY: number, _i: number, _offset: number) {

            console.log("construct rocket");

            this.position = new Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY; 
            this.speed = new Vector(0, 0);
            this.speed.x = Math.cos(_offset * _i) * Math.floor(Math.random() * (30 - 20 + 1) + 5); //10 ist die schnelligkeit
            this.speed.y = Math.sin(_offset * _i) * Math.floor(Math.random() * (20 - 10 + 1) + 5);
        
           
            this.color = _color;
           // this.shape = _shape;     
       
    }

    public move(_timeslice: number): void {
        
        let offset: Vector = new Vector(this.speed.x, this.speed.y);
        offset.scale(_timeslice);
        this.position.add(offset);

        this.lifetime -= _timeslice;
        if (this.lifetime < 0)
            this.expendable = true;
        
    }

    public abstract draw(): void;
       

    }
}