var unogame;
(function (unogame) {
    var color = ["#ff5454", "#fffc54", "#56ff54", "#5495ff", "#424242"];
    var cards_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var cards_Zero = "0";
    var cards_special = ["Aussetzen", "RW", "plus2"];
    var cards_black = ["Joker", "plus4"];
    // FUNKTION UM ZUFAELLIGE ZAHLEN ZU GENERIEREN ZWISCHEN MIN/MAX
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var i = prompt("Wie viele Karten sollen ausgeteilt werden?");
    var counter = Number(i);
    // GENERELLE FOR SCHLEIFE DIE u-mal DURCHLAEUFT
    for (var u = 0; u < counter; u++) {
        var card = "";
        var r_color = randomBetween(1, 1000);
        console.log(r_color);
        if (r_color <= 74) {
            console.log("BLACK CARD");
            var r_black = randomBetween(0, 1);
            card = cards_black[r_black];
            if (r_black == 0) {
                var black = color[4];
                placeDiv(black, 50, 50, 75, 150, cards_black[r_black]);
            }
        }
        else {
            console.log("COLORED CARD");
            var r_Zero = randomBetween(0, 1000);
            var whichColor = color[randomBetween(0, 3)]; //FARBAUSWAHL
            //ZERO KARTE
            if (r_Zero <= 37) {
                card = "0";
            }
            else if (r_Zero > 37 && r_Zero < 760) {
                var rNumber = randomBetween(1, 9);
                //FARBE AUSWAEHLEN
                var WhichColor = randomBetween(0, 3);
                console.log("FARBE: " + WhichColor);
            }
            else if (r_Zero >= 760) {
                var r_Special = randomBetween(0, 2);
                switch (r_Special) {
                    case 0:
                        var red = color[WhichColor];
                        placeDiv(red, 50, 50, 75, 150, r_Special);
                        card = String(r_Special);
                        break;
                    case 1:
                        var yellow = color[WhichColor];
                        placeDiv(yellow, 50, 50, 75, 150, r_Special);
                        card = String(r_Special);
                        break;
                    case 2:
                        var green = color[WhichColor];
                        placeDiv(green, 50, 50, 75, 150, r_Special);
                        card = String(r_Special);
                        break;
                    case 3:
                        var blue = color[WhichColor];
                        placeDiv(blue, 50, 50, 75, 150, r_Special);
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
    function placeDiv(_color, _x, _y, _width, _height, text) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "Karte#" + u); //div ID in Abh�ngigkeit von _x (aktuelle Karte die gegeben wird)
        document.getElementById("Karte#" + u).innerHTML = text;
        let s = div.style;
        s.border = "3px solid black";
        s.position = "relative";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
})(unogame || (unogame = {}));