"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    class Snowflake extends L10_Inheritance_Skipiste.Moveable {
        draw() {
            // console.log("draw Snowflake");
            let radiusSnowflake = Math.random() * 2.5 + 1;
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.translate(this.x, this.y);
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.arc(this.x, this.y, radiusSnowflake, 0, Math.PI * 2, false);
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.restore();
        }
        move() {
            // console.log("move Snowflake");
            if (this.y >= 800) {
                this.y = 0;
            }
            this.y += Math.random() * 1;
        }
    }
    L10_Inheritance_Skipiste.Snowflake = Snowflake;
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {}));
//new position geben mit y bsp. -10  mit if schleife
//# sourceMappingURL=Snowflake.js.map