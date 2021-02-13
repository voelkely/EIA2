"use strict";
var Firework;
(function (Firework) {
    function drawCanvas() {
        Firework.crc2.fillStyle = "rgba (0, 0, 0, 0.05)";
        Firework.crc2.fillRect(0, 0, Firework.crc2.canvas.width, Firework.crc2.canvas.height);
    }
    Firework.drawCanvas = drawCanvas;
})(Firework || (Firework = {}));
//# sourceMappingURL=BackgroundCanvas.js.map