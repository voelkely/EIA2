namespace L04_Hexenkessel {

    export function generateContent (_data: Data) {
        console.log(_data);

        for (let category in _data) {
            let items: Item [] = _data[category];

            let group: HTMLElement | null = null;
            switch (category) {
                case "Ingredients":
                    group = createMultiple(items);
                    
                    break;
            
                default:
                    break;
            
            }        
            
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group) 
                fieldset.appendChild(group);           

        }

    }

    function createMultiple(_items: Item[]): HTMLElement | null {
        return null;
    }

}