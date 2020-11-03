namespace L04_Hexenkessel {

    export function generateContent (_data: Data) {
        console.log(_data);

        for (let category in _data) {
            let items: Item [] = _data[category];

            let group: HTMLElement | null = null;
            switch (category) {
                case "Ingredients":
                    group = createMultiple(items, category);
                    
                    break;
            
                default:
                    break;
            
            }        
            
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group) 
                fieldset.appendChild(group);           

        }

    }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");                    // dieses group aus createMultiple befindet sich in einem namespace und hat nichts mit dem group oben zu tun, das gilt für generateContent!!
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
        }
        return group;
    }

}