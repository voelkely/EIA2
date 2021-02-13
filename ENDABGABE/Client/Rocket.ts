namespace Endabgabe_Feuerwerk {

    export class Rockets { //SUPERKLASSE

        //HIER MUSS ICH NOCH DIE FRABEN ENTFERNEN; SOLL JA DURCH USER GENERIERT WERDEN DURCH DATEN AUS DATENBANK!!

        position: Vector;
        speed: Vector;
        color: string[];
        randomColor: string;
        amount: number;
        shape: string;
        lifetime: number;
        
        expendable: boolean;
        gravity: number = 1; 
        alpha: number = 0.3;

        constructor(_color: string, _speed: number, _positionX: number, _positionY: number, _i: number, _offset: number) {

            console.log("construct Moveable");

            this.position = new Vector(0, 0);
            this.position.x = _positionX; //click on canvas
            this.position.y = _positionY; 
            this.speed = new Vector(0, 0);
            this.speed.x = Math.cos(_offset * _i) * Math.floor(Math.random() * (50 - 40 + 1) + 5); //10 ist die schnelligkeit
            this.speed.y = Math.sin(_offset * _i) * Math.floor(Math.random() * (40 - 30 + 1) + 5);
        
           // this.color = _color;
            this.speed.y += this.gravity;
            this.speed.x += this.gravity;
            this.color = [] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a", "#f59931", "#8fc7b8", "#edbeea"];
            this.randomColor = this.color[Math.floor(Math.random() * this.color.length)];
        
        } //Interface + constructor zu

        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
 
        } //move zu

        draw(): void { //draw wird nacher nach CircleParticle und HeartParticle verschoben, hier nur abstract draw()

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.globalAlpha = this.alpha;


            crc2.beginPath();
            crc2.arc(0, 0, 2, 0, 2 * Math.PI, true);
            crc2.fillStyle = this.randomColor;
            crc2.fill();

            crc2.restore();

        } //draw zu
        
        
    } // class zu

} //namespace zu


