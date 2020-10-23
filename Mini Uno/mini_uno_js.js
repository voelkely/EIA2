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