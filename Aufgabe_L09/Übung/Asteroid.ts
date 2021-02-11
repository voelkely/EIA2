/* namespace L09_Classes_Asteroids {

    export class Asteroid {
    position: Vector;
    velocity: Vector;
    type: number;
    size: number;

    constructor(_size: number, _position?: Vector) { //_position? bedeutet kann da sein, muss aber nicht
        console.log("asteroids constructor");

        if (_position)
            this.position = _position;
        else
            this.position = new Vector (0, 0);
            
        //set velocity zustzlich zu function in Vector.ts
        this.velocity = new Vector (0, 0);
        this.velocity.random(100, 200); //100 - 200 px pro sekunde soll der Asteroid fliegen können
        //randomly choose type (4)
        this.type = Math.floor(Math.random() * 4); //Math.floor schneidet nach kommastellen ab für ein rundes Ergebnis
        //set size to _size
        this.size = _size; //ist die _size die oben angegeben wurde --> es werden nur Zahlen von 1-3 angegeben siehe  Konsole

    }

    move(_timeslice: number): void {
        //console.log("asteroids move");
        //add velocity * _timeslice to position = OFFSET
        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
        this.position.add(offset); //diese verscheibung wird mit der position addiert
        //Die erste schleife
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
        //console.log("asteroids draw");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.scale(this.size, this.size); //2 mal für eine gleichmäßige Skalierung in beiden dimensionen x,y
        crc2.translate(-50, -50);
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
