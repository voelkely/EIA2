"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
    class Snowflake {
        draw() {
            // console.log("draw Snowflake");
            let radiusSnowflake = Math.random() * 2.5 + 1;
            L09_Classes_Skipiste.crc2.save();
            L09_Classes_Skipiste.crc2.translate(this.x, this.y);
            L09_Classes_Skipiste.crc2.beginPath();
            L09_Classes_Skipiste.crc2.arc(this.x, this.y, radiusSnowflake, 0, Math.PI * 2, false);
            L09_Classes_Skipiste.crc2.fillStyle = "white";
            L09_Classes_Skipiste.crc2.fill();
            L09_Classes_Skipiste.crc2.restore();
        }
        move() {
            // console.log("move Snowflake");
            if (this.y >= 800) {
                this.y = 0;
            }
            this.y += Math.random() * 1;
        }
    }
    L09_Classes_Skipiste.Snowflake = Snowflake;
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {}));
//new position geben mit y bsp. -10  mit if schleife
//# sourceMappingURL=Snowflake.js.map