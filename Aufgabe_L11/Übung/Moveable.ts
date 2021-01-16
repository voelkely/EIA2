namespace L11_Asteroids {

    export abstract class Moveable {
    public expendable: boolean = false;
    public position: Vector;
    public velocity: Vector;
    protected hitRadius: number = 0;
    

    constructor( _position?: Vector) { //_position? bedeutet kann da sein, muss aber nicht
        console.log("moveable constructor");

        if (_position)
            this.position = _position.copy();
        else
            this.position = new Vector (0, 0);
            
        this.velocity = new Vector (0, 0);
       
    }

    public isHitBy(_partner: Moveable): boolean {
        let difference: Vector = Vector.getDifference(this.position, _partner.position);
        if (this.hitRadius + _partner.hitRadius < difference.length)
            return false;
        return true; 
    }

    public move(_timeslice: number): void {
        
        let offset: Vector = this.velocity.copy();
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

    public hit(): void {
        this.expendable = true;

    }

    public abstract draw(): void;
    

    }
}