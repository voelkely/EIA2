//definiere Karten
interface Card {
    id: string;
    zahl: number;
    farbe: string;
    image: string;
}   
//definiere Spieler 
interface Player {
    hand: Card[],
    cpu: boolean,
    name: string,
}
//definiere Spiel 
interface Game {
    player1: Player;
    player2: Player;
    deck: Card[];
    currentPlay: Card[];
    currentPlayer: Player;
}
// jeder Spieler startet das Spiel mit 3 zufälligen Karten
let initialNumberOfCards: number = 3;



//karten 
let rot3= {
    zahl: 3,
    farbe: "rot",
    id:"rot3",
    image: "img/rot3.jpg"

    
}