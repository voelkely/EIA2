namespace L10_Asteroids {

    export class Asteroid extends Moveable {
    position: Vector;
    velocity: Vector;
    type: number;
    size: number;

    constructor(_size: number, _position?: Vector) {
        
        super(_position);

        console.log("asteroids constructor");

        if (_position)
            this.position = _position.copy();
        else
            this.position = new Vector (0, 0);
            
        this.velocity = new Vector (0, 0);
        this.velocity.random(100, 200); //100 - 200 px pro sekunde soll der Asteroid fliegen können
        //randomly choose type (4)
        this.type = Math.floor(Math.random() * 4); //Math.floor schneidet nach kommastellen ab für ein rundes Ergebnis
        //set size to _size
        this.size = _size; //ist die _size die oben angegeben wurde --> es werden nur Zahlen von 1-3 angegeben siehe  Konsole

    }

    draw(): void {
        //console.log("asteroids draw");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.scale(this.size, this.size); //2 mal für eine gleichmäßige Skalierung in beiden dimensionen x,y
        crc2.translate(-50, -50);
        crc2.lineWidth = lineWidth / this.size;
        crc2.stroke(asteroidPaths[this.type]);
        crc2.restore();
    }

    isHit(_hostpot: Vector): boolean { //Wenn es eine Prüfung ist muss die Methode mit "is" anfangen. Ansonsten sollen die methoden eine Aktivität beschreiben
        let hitsize: number = 50 * this.size;
        let difference: Vector = new Vector(_hostpot.x - this.position.x, _hostpot.y - this.position.y);
        return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);

    }



    }
}
