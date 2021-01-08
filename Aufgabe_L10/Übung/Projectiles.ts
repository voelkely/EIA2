namespace L10_Asteroids {

    export class Projectiles extends Moveable {

    lifetime: number = 2;


    constructor(_velocity: Vector, _position: Vector) {
        
        super(_position);

        console.log("projectiles constructor");       
        this.velocity = _velocity.copy();

    }

    draw(): void {
        //console.log("asteroids draw");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.strokeRect(-1, -1, 1, 1);
        crc2.restore();
    }

    move(_timeslice: number): void {

        super.move(_timeslice);
        this.lifetime -= _timeslice;
        if (this.lifetime < 0)
        this.expendable = true;
        

    }


    }

}