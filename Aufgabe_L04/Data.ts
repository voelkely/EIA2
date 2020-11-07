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
            { name: "Spiderlegs", price: 10.00 },
            { name: "Peppermints", price: 5.00 },
            { name: "Toenails", price: 25.00 },
            { name: "Ashwinder Egg", price: 10.00 },
            { name: "Bat Wing", price: 30.00 },
            { name: "Beetle Eye", price: 40.00 },
            { name: "Fairy Wings", price: 140.00 },
            { name: "Jobberknoll Feather", price: 110.00 },
            { name: "Moonstone", price: 110.00 }
        ]
    };
}