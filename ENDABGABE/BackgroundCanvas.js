"use strict";
var Firework;
(function (Firework) {
    function drawCanvas() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Firework.crc2 = canvas.getContext("2d");
        Firework.crc2.fillStyle = "black";
        Firework.crc2.fillRect(0, 0, Firework.crc2.canvas.width, Firework.crc2.canvas.height);
    }
    Firework.drawCanvas = drawCanvas;
})(Firework || (Firework = {}));
//# sourceMappingURL=BackgroundCanvas.js.map