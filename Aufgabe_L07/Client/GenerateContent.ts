namespace L07_Hexenkessel {

    export interface Item {
        name: string;
        price?: number;
    }

    export interface Data {
        [category: string]: Item [];
    }

    export function generateContent(_data: Data): void {
        //console.log(_data);

        for (let category in _data) {
            let items: Item [] = _data[category];
            createMultiple(items, category);
            console.log(items);


            let group: HTMLElement | null = null;
            switch (category) {
                    case "Ingredients":
                        group = createMultiple(items, category);

                        let fieldset: HTMLFieldSetElement | null = document.querySelector("#ingredients");
                        if (fieldset && group)
                            fieldset.insertBefore(group, document.getElementById("add_ingredients")); 
                        break;
                
                        default: 

                }           
        }

    }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");                    // dieses group aus createMultiple befindet sich in einem namespace und hat nichts mit dem group oben zu tun, das gilt für generateContent!!
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", (item.price)!.toFixed());
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            let stepper: HTMLInputElement = document.createElement("input");
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

}