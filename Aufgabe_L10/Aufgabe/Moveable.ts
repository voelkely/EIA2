namespace L10_Inheritance_Skipiste {

    export class Moveable {
    position: Vector;
    speed: Vector;
    speed2: number;
    x: number;
    y: number;

    constructor( _position?: Vector) { 
        console.log("moveable constructor");

        if (_position)
            this.position = _position;
        else
            this.position = new Vector (0, 0); // was kommt da rein?
            
        this.speed = new Vector (0, 0);
       
    }

    move(_timeslice: number): void {
        
        let offset: Vector = this.speed.copy();
        offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
        this.position.add(offset); //diese verscheibung wird mit der position addiert
    
        if (this.position.x < 0 )
            this.position.x += crc2.canvas.width;
        if (this.position.y < 0 )
            this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
            this.position.x -= crc2.canvas.height;
        
    }

    draw(): void {
        //console.log("moveable draw");
    }

    }
}