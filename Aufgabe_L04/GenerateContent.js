"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    function generateContent(_data) {
        console.log(_data);
        for (var category in _data) {
            console.log(category);
        }
    }
    L04_Hexenkessel.generateContent = generateContent;
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
