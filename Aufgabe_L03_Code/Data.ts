namespace L04_Hexenkessel {

    interface: Item {
        name: string;
        price: number;
    }

    inteface: Data {
        [category: string]: Item [];

    }

    let data: Data 
}