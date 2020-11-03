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
                    group = createMultiple(items, category);
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
    function createMultiple(_items, _category) {
        var group = document.createElement("div"); // dieses group aus createMultiple befindet sich in einem namespace und hat nichts mit dem group oben zu tun, das gilt für generateContent!!
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var item = _items_1[_i];
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
