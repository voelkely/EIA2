namespace L09_Classes_Skipiste {

    export class Snowflake {
        x: number;
        y: number;
        speed: number;


        draw(): void {
            console.log("draw Snowflake");
            let radiusSnowflake: number = Math.random() * 2.5 + 1;
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();     
            crc2.arc(this.x, this.y, radiusSnowflake, 0, Math.PI * 2, false);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.restore();
        }

        move(): void {
            console.log("move Snowflake");

            this.y += this.speed * (2) ;
    
        }
    }
} 