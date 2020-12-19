namespace L09_Classes_Skipiste {
    export class Lift {

        position: Vector;
        speed: Vector;
        y: number;
        x: number;
        status: string;

        constructor() {
            console.log("construct Lift");
            this.position = new Vector (600, 325); //Startposition meines Lifts
            this.speed = new Vector (110, 200); 
        }

        draw(): void {
            console.log("draw Lift");

            //Wagon
            crc2.beginPath();
            crc2.rect(550, 340, 130, 90);
            crc2.fillStyle = "#a9c9c9";
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.font = "15px sans-serif";
            crc2.fillText("SKI LIFT", 580, 415);

            crc2.save();
            crc2.restore();

            // Verbindung 
            crc2.beginPath();
            crc2.rect(610, 300, 10, 40);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();

            //Rahmen
            crc2.beginPath();
            crc2.rect(570, 350, 30, 45);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Rahmen2
            crc2.beginPath();
            crc2.rect(610, 350, 30, 45);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Rahmen3
            crc2.beginPath();
            crc2.rect(558, 348, 114, 50);
            crc2.lineWidth = 2;
            crc2.fill();
            crc2.closePath();

            //Fenster1
            crc2.beginPath();
            crc2.rect(560, 350, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();

            //Fenster2
            crc2.beginPath();
            crc2.rect(600, 350, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();

             //Fenster3
            crc2.beginPath();
            crc2.rect(640, 350, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();
            crc2.save();
            crc2.restore();
        }


        moveUp(_timeslice: number): void {
            console.log("Lift is going up");

            let offset: Vector = new Vector(this.speed.x, this.speed.y); //Offset ist der Weg 
            offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
            this.position.add(offset); //diese verscheibung wird auf die position addiert

             
        }


    }

}
      
       




    
