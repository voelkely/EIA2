"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    function generateContent(_data) {
        console.log(_data);
        for (var category in _data) {
            var items = _data[category];
            var group = null;
            switch (category) {
                case "Ingredients":
                    group = createMultiple(items);
                    break;
                default:
                    break;
            }
            var fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Hexenkessel.generateContent = generateContent;
    function createMultiple(_items) {
        return null;
    }
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
