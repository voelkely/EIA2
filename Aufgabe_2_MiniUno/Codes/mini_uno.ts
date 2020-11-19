// namespace Mini Uno {

//     interface Karten {
//         farbe: string; // Farbe der Karte 
//         zahl: number;  // Nummer auf der Karte 
//         Bild: string;

//     }
// }

// let farbe: string []: ["Rot", "Gelb", "Blau", "Green"];
// let zahl: number []: ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


// // FUNKTION UM ZUFAELLIGE ZAHLEN ZU GENERIEREN ZWISCHEN MIN/MAX
//   function randomBetween(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var i: string = prompt("Wie viele Karten sollen ausgeteilt werden?");
// var counter: number = Number(i);

// //Variablen 
// //rot
// let rot1 = {
//     farbe: "rot",
//     zahl: 1,
//     Bild: "img/rot1.jpg"
// };
// let rot2 = {
//     farbe: "rot",
//     zahl: 2,
//     Bild: "img/rot2.jpg"
// };
// let rot3 = {
//     farbe: "rot",
//     zahl: 3,
//     Bild: "img/rot3.jpg"
// };
// let rot4 = {
//     farbe: "rot",
//     zahl: 4,
//     Bild: "img/rot4.jpg"
// };
// let rot5 = {
//     farbe: "rot",
//     zahl: 5,
//     Bild: "img/rot5.jpg"
// };
// let rot6 = {
//     farbe: "rot",
//     zahl: 6,
//     Bild: "img/rot6.jpg"
// };
// let rot7 = {
//     farbe: "rot",
//     zahl: 7,
//     Bild: "img/rot7.jpg"
// };
// let rot8 = {
//     farbe: "rot",
//     zahl: 8,
//     Bild: "img/rot8.jpg"
// };
// let rot9 = {
//     farbe: "rot",
//     zahl: 9,
//     Bild: "img/rot9.jpg"
// };

// //blau

// let blau1 = {
//     farbe: "blau",
//     zahl: 1,
//     Bild: "img/blau1.jpg"
// };
// let blau2 = {
//     farbe: "blau",
//     zahl: 2,
//     Bild: "img/blau2.jpg"
// };
// let blau3 = {
//     farbe: "blau",
//     zahl: 3,
//     Bild: "img/blau3.jpg"
// };
// let blau4 = {
//     farbe: "blau",
//     zahl: 4,
//     Bild: "img/blau4.jpg"
// };
// let blau5 = {
//     farbe: "blau",
//     zahl: 5,
//     Bild: "img/blau5.jpg"
// };
// let blau6 = {
//     farbe: "blau",
//     zahl: 6,
//     Bild: "img/blau6.jpg"
// };
// let blau7 = {
//     farbe: "blau",
//     zahl: 7,
//     Bild: "img/blau7.jpg"
// };
// let blau8 = {
//     farbe: "blau",
//     zahl: 8,
//     Bild: "img/blau8.jpg"
// };
// let blau9 = {
//     farbe: "blau",
//     zahl: 9,
//     Bild: "img/blau9.jpg"
// };

// //gelb
// let gelb1 = {
//     farbe: "gelb",
//     zahl: 1,
//     Bild: "img/gelb1.jpg"
// };
// let gelb2 = {
//     farbe: "gelb",
//     zahl: 2,
//     Bild: "img/gelb2.jpg"
// };
// let gelb3 = {
//     farbe: "gelb",
//     zahl: 3,
//     Bild: "img/gelb3.jpg"
// };
// let gelb4 = {
//     farbe: "gelb",
//     zahl: 4,
//     Bild: "img/gelb4.jpg"
// };
// let gelb5 = {
//     farbe: "gelb",
//     zahl: 5,
//     Bild: "img/gelb5.jpg"
// };
// let gelb6 = {
//     farbe: "gelb",
//     zahl: 6,
//     Bild: "img/gelb6.jpg"
// };
// let gelb7 = {
//     farbe: "gelb",
//     zahl: 7,
//     Bild: "img/gelb7.jpg"
// };
// let gelb8 = {
//     farbe: "gelb",
//     zahl: 8,
//     Bild: "img/gelb8.jpg"
// };
// let gelb9 = {
//     farbe: "gelb",
//     zahl: 9,
//     Bild: "img/gelb9.jpg"
// };

// //green
// let green1 = {
//     farbe: "green",
//     zahl: 1,
//     Bild: "img/green1.jpg"
// };
// let green2 = {
//     farbe: "green",
//     zahl: 2,
//     Bild: "img/green2.jpg"
// };

// let green3 = {
//     farbe: "green",
//     zahl: 3,
//     Bild: "img/green3.jpg"
// };
// let green4 = {
//     farbe: "green",
//     zahl: 4,
//     Bild: "img/green4.jpg"
// };
// let green5 = {
//     farbe: "green",
//     zahl: 5,
//     Bild: "img/green5.jpg"
// };
// let green6 = {
//     farbe: "green",
//     zahl: 6,
//     Bild: "img/green6.jpg"
// };
// let green7 = {
//     farbe: "green",
//     zahl: 7,
//     Bild: "img/green7.jpg"
// };
// let green8 = {
//     farbe: "green",
//     zahl: 8,
//     Bild: "img/green8.jpg"
// };
// let green9 = {
//     farbe: "green",
//     zahl: 9,
//     Bild: "img/green9.jpg"
// };

// let stapelArray: Karten[] = [gelb1, gelb2, gelb3, gelb4, gelb5, gelb5, gelb7, gelb8, gelb9, rot1, rot2, rot3, rot4, rot5, rot6, rot7, rot8, rot9, green1, green2, green3, green4, green5, green6, green7, green8, green9, blau1, blau2, blau3, blau4, blau5, blau6, blau7, blau8, blau9];
// let spieler1Array: Karten[] = [];
// let spieler2Array: Karten[] = [];
// let playareaArray: Karten[] = [];