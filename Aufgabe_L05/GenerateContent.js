"use strict";
var L05_Hexenkessel;
(function (L05_Hexenkessel) {
    function generateContent(_data) {
        //console.log(_data);
        for (let category in _data) {
            let items = _data[category];
            createMultiple(items, category);
            console.log(items);
            let group = null;
            switch (category) {
                case "Ingredients":
                    group = createMultiple(items, category);
                    let fieldset = document.querySelector("#ingredients");
                    if (fieldset && group)
                        fieldset.insertBefore(group, document.getElementById("add_ingredients"));
                    break;
                default:
            }
        }
    }
    L05_Hexenkessel.generateContent = generateContent;
    function createMultiple(_items, _category) {
        let group = document.createElement("div"); // dieses group aus createMultiple befindet sich in einem namespace und hat nichts mit dem group oben zu tun, das gilt für generateContent!!
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", (item.price).toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            let stepper = document.createElement("input");
            stepper.type = "number";
            stepper.name = "amount";
            stepper.id = item.name + "_amount";
            stepper.step = "1";
            stepper.value = "0";
            group.appendChild(checkbox);
            group.appendChild(label);
            group.appendChild(stepper);
            group.innerHTML += "</br>";
        }
        return group;
    }
})(L05_Hexenkessel || (L05_Hexenkessel = {}));
//# sourceMappingURL=GenerateContent.js.map