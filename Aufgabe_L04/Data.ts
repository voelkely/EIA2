namespace L04_Hexenkessel {

    export interface Item {
        name: string;
        price?: number;
    }

    export interface Data {
        [category: string]: Item [];
    }

    export let data: Data = {
        Ingredients: [
            { name: "Spinnenbeine", price: 120.00 },
            { name: "Pfefferminz", price: 328.00 },
            { name: "Zahennägel", price: 111.00 },
            { name: "Ashwinder Eier", price: 981.00 },
            { name: "Fledermausflügel", price: 376.00 },
            { name: "Beetle Augen", price: 110.00 },
            { name: "Feenflügel", price: 643.00 },
            { name: "Jobberknoll Federn", price: 435.00 },
            { name: "Mondstein", price: 3025.00 }
        ]
    };
}