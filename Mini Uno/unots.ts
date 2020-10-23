namespace unogame {

    var color: string[] = ["#ff5454", "#fffc54", "#56ff54", "#5495ff", "#424242"];
    var cards_numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var cards_Zero: string = "0";
    var cards_special: string[] = ["Aussetzen", "RW", "plus2"];
    var cards_black: string[] = ["Joker", "plus4"];

    // FUNKTION UM ZUFAELLIGE ZAHLEN ZU GENERIEREN ZWISCHEN MIN/MAX
    function randomBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var i: string = prompt("Wie viele Karten sollen ausgeteilt werden?");
    var counter: number = Number(i);
    // GENERELLE FOR SCHLEIFE DIE u-mal DURCHLAEUFT
    for (var u: number = 0; u < counter; u++) {
        var card: string = "";
        var r_color: number = randomBetween(1, 1000);
        console.log(r_color);


        if (r_color <= 74) { // WENN r_color KLEINER/GLEICH ALS 74 DANN ENTSCHEIDE ZWISCHEN JOKER/PLUS4 KARTE
            console.log("BLACK CARD");

            var r_black: number = randomBetween(0, 1);
            card = cards_black[r_black];

            if (r_black == 0) {
                var black = color[4];
                placeDiv(black, 50, 50, 75, 150, cards_black[r_black]);
            }
        }

        else {
            console.log("COLORED CARD")

            var r_Zero: number = randomBetween(0, 1000);
            var whichColor: string = color[randomBetween(0, 3)]; //FARBAUSWAHL

            //ZERO KARTE
            if (r_Zero <= 37) {
                card = "0";
            }


            //WENN KEINE NULL, DANN NUMMER AUSWAEHLEN
            else if (r_Zero > 37 && r_Zero < 760) {
                card = String(randomBetween(1, 9));

            }

            //SPECIAL KARTE    
            else if (r_Zero >= 760) {
                var r_Special: number = randomBetween(0, 2);


                switch (r_Special) {
                    case 0: //RED
                        var red: string = color[WhichColor];
                        placeDiv(red, 50, 50, 75, 150, <string><any>r_Special);
                        card = String(r_Special);
                        break;

                    case 1: //YELLOW
                        var yellow: string = color[WhichColor];
                        placeDiv(yellow, 50, 50, 75, 150, <string><any>r_Special);
                        card = String(r_Special);
                        break;

                    case 2: //GREEN
                        var green: string = color[WhichColor];
                        placeDiv(green, 50, 50, 75, 150, <string><any>r_Special);
                        card = String(r_Special);
                        break;

                    case 3: //BLUE
                        var blue: string = color[WhichColor];
                        placeDiv(blue, 50, 50, 75, 150, <string><any>r_Special);
                        card = String(r_Special);
                }
            }
        }
        placeDiv(whichColor, 50, 50, 75, 150, card);

        console.log(card);

        console.log("Variable i: " + i);
        console.log("Counter: " + counter);
        console.log("Variable u: " + u);
        console.log("++++++++++++++++++++++++++++++++++++");




    }

    function placeDiv(_color: string, _x: number, _y: number, _width: number, _height: number, text: string): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        div.setAttribute("id", "Karte#" + u) //div ID in Abh�ngigkeit von _x (aktuelle Karte die gegeben wird)

        document.getElementById("Karte#" + u).innerHTML = text;

        let s: CSSStyleDeclaration = div.style;
        s.border = "3px solid black";
        s.position = "relative";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
}
