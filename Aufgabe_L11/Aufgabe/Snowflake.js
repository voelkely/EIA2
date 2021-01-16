"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Snowflake extends L11_Skipiste.Moveable {
        draw() {
            // console.log("draw Snowflake");
            let radiusSnowflake = Math.random() * 2.5 + 1;
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.x, this.y);
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(this.x, this.y, radiusSnowflake, 0, Math.PI * 2, false);
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.restore();
        }
        move() {
            // console.log("move Snowflake");
            if (this.y >= 800) {
                this.y = 0;
            }
            this.y += Math.random() * 1;
        }
    }
    L11_Skipiste.Snowflake = Snowflake;
})(L11_Skipiste || (L11_Skipiste = {}));
//new position geben mit y bsp. -10  mit if schleife
//# sourceMappingURL=Snowflake.js.map