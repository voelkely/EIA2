namespace L09_Classes_Skipiste {
    export class Lift {

        position: Vector;
        speed: Vector;
        y: number;


        constructor(_y: number) {
            console.log("construct Lift");
            this.position = new Vector (610, 300); //Da muss Punkt von der Verbindung zwischen Wagon und Linierein //300
            this.speed = new Vector (20, -11); //Ausrichtung an der Linie
        }

        draw(): void {
            console.log("draw Lift");
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.translate(-this.position.x, -this.position.y);

            //Wagon
            crc2.beginPath();
            crc2.rect(this.position.x - 60, this.position.y + 40, 130, 90);
            crc2.fillStyle = "#a9c9c9";
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.font = "15px sans-serif";
            crc2.fillText("SKI LIFT", this.position.x - 30, this.position.y + 120);

            //crc2.save();
            //crc2.restore();

            // Verbindung 
            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 10, 40);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();

            //Rahmen
            crc2.beginPath();
            crc2.rect(this.position.x - 50, this.position.y + 50, 30, 45);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Rahmen2
            crc2.beginPath();
            crc2.rect(this.position.x + 30, this.position.y + 50, 30, 45);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Rahmen3
            crc2.beginPath();
            crc2.rect(this.position.x - 50, this.position.y + 50, 114, 50);
            crc2.lineWidth = 2;
            crc2.fill();
            crc2.closePath();

            //Fenster1
            crc2.beginPath();
            crc2.rect(this.position.x - 46, this.position.y + 52, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();

            //Fenster2
            crc2.beginPath();
            crc2.rect(this.position.x - 10, this.position.y + 52, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();

             //Fenster3
            crc2.beginPath();
            crc2.rect(this.position.x + 27, this.position.y + 52, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();
           // crc2.save();
            
            crc2.restore();
        }


        moveUp(_timeslice: number): void {
            console.log("Lift is going up");

            let offset: Vector = new Vector(this.speed.x, this.speed.y); //Offset ist der Weg
            console.log(offset);
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird auf die position addiert
            console.log(this.position);
             
        }

        moveDown(_timeslice: number): void {
            let offset: Vector = new Vector(this.speed.x, this.speed.y); //Offset ist der Weg 
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset);
            if (this.position.y >= 600) {
                this.position = new Vector (0, this.y);
        }

// für lift runter ab punkt 

    }

}
      
       




    
