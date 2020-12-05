"use strict";
var L08_Canvas_Alley;
(function (L08_Canvas_Alley) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
    }
})(L08_Canvas_Alley || (L08_Canvas_Alley = {}));
//# sourceMappingURL=alley.js.map