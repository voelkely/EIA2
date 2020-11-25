"use strict";
// namespace L06_Hexenkessel {
//     window.addEventListener("load", handleLoad);
//     //let url: string = "index2.html";
//     //let url: string = "https://mycodingapp97.herokuapp.com";
//     //let url: string = "http://localhost:5001";
//     function handleLoad(_event: Event): void {
//         getData();
//         let addBasics: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_basics");
//         let addIngredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_ingredients");
//         let addTemperature: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_temperature");
//         let addStiring: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_stiring");
//         let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#sendPotion");    
//         addBasics.addEventListener("click", createRezept); // Hier werden die Basics ausgegeben 
//         addIngredients.addEventListener("click", createAnweisungen); // Hier werden Zutaten, Temperatur und Rühren ausgegeben
//         addTemperature.addEventListener("click", displayTemperature); 
//         addStiring.addEventListener("click", displayStir);
//         submit.addEventListener("click", sendPotion); // asynchrone Funktion, damit das Rezept an Server gesendet wird
//     }
//     async function getData(): Promise<void> {
//         let response: Response = await fetch("Data.json");
//         let offer: string = await response.text();
//         let data: Data = JSON.parse(offer);
//         generateContent(data);
//     }
//     async function sendPotion(): Promise<void> {
//         let form: FormData = new FormData(document.forms[0]);
//         let form1: FormData = new FormData(document.forms[1]);
//         //let url: string = "http://localhost:5001/";
//         let url: string = "https://mycodingapp97.herokuapp.com";
//         let query: URLSearchParams = new URLSearchParams(<any>form);
//         let query1: URLSearchParams = new URLSearchParams(<any>form1);
//         let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");   // sortiert das Select Element aus dem HTML // bei Text area if schleife weil da auch nichts drin  steht
//         let textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector("textarea");
//         url = url + "?" + query.toString() + query1.toString()  + "&wirkung=" + "&beschreibung=" + select.value + textarea.value;
//         let response: Response = await fetch(url);
//         console.log(response);
//         let reply: string = await response.text();  // Antwort vom Server im alert
//         console.log(reply);
//         alert(reply);
//     }
//     function createRezept(_event: Event): void {
//         let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#basic"); //Form Element wird benutzt, um aus ihm Informationen zu ziehen
//         //console.log(_event);
//         let input: HTMLInputElement = <HTMLInputElement>document.querySelector("input"); //Text 
//         let textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector("textarea"); //Textarea
//         let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select"); //Select
//         let radio: string = form.elements["dauer"].value; //RadioButtons (HIER GEHT DAS MIT DEM QUERY.SLECTOR NICHT --> NULL)
//         let display: HTMLElement = <HTMLElement>document.querySelector("#display_basic");   //Ausgabe
//         display.innerHTML = ""; //leert das Array sodass sich die Ausgabe nicht wiederholt, wenn man button erneut klickt!
//         display.innerHTML += "Name:" + "&nbsp" + input.value + "</br>" + "Beschreibung:" + "&nbsp" + textarea.value + "</br>" + "Wirkung:" + "&nbsp" + select.value + "</br>" + "Dauer:" + "&nbsp" + radio + "</br>";   //Ausgabe im Rezept 
//     }
//     function createAnweisungen(_event: Event): void {
//         let formData: FormData = new FormData(document.forms[1]); //Das Form Element aus dem die Infos gezogen werden sollen (Action)
//         let displayAnweisungen: HTMLElement = <HTMLElement>document.querySelector("#display_anweisungen"); //Ausgabe sowie let display oben
//         let outputTotal: HTMLElement = <HTMLElement>document.querySelector("#total");
//         let total: number = 0;
//         outputTotal.innerHTML = "";
//         displayAnweisungen.innerHTML = "Füge deine Zutaten:" + "</br>";
//         for (let entry of formData) {
//             //console.log(entry);
//             if (entry [0] == "Ingredients") {
//                 let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById(entry[1] + "_amount");
//                 let amount: number = parseInt(stepper.value);
//                 console.log(stepper.value);
//                 let priceElement: HTMLLIElement = <HTMLLIElement>document.querySelector("[value='" + entry[1] + "']");
//                 let price: number = parseInt(<string>priceElement.getAttribute("price"));
//                 total += price;
//                 let gesamtpreis: number = price * amount; // keine ahnung warum mir das hier rot markiert wird...
//                 console.log(price * amount);
//                 displayAnweisungen.innerHTML += stepper.value + " " + entry[1] + " " + "(" + gesamtpreis + "&nbsp" + "GAL" + ")"  + "</br>";
//             }
//         }
//         displayAnweisungen.innerHTML += " in einen Zaubertopf." + "</br>";
//         let adjustedPrice: string = convertCurrency(total);
//         //console.log(total);
//         outputTotal.innerHTML = "<p><strong>Preis: " + "&nbsp" + adjustedPrice;
//     }
//     function displayTemperature(): void {
//         let displayAnweisungen: HTMLElement = <HTMLElement>document.querySelector("#display_anweisungen");
//         let temperature: boolean = false;
//         let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("#action"));               
//         for (let entry of formData) {
//             switch (entry[0]) {               
//                 case "temperatur":
//                     if (entry[1] != "") {
//                             displayAnweisungen.innerHTML += "</br>" + "Als nächstes musst du deinen Zaubertrank" + "&nbsp" +  entry[1] + "." +  "<br>";
//                             temperature = true;
//                     }
//                     break;
//                 case "temperaturGrad":
//                     if (entry[1] != "" && temperature) {
//                             displayAnweisungen.innerHTML += "Bringe deinen Trank auf eine Temperatur von" + "&nbsp" + entry[1] + " °C." + "<br>";
//                     }
//                     break;
//                     case "temperaturDauer":
//                         if (entry[1] != "" && temperature) {
//                             let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById("dauer1");
//                             console.log(stepper.value);
//                             displayAnweisungen.innerHTML += "Koche die Zutaten für einen Zeitraum von" + "&nbsp" + stepper.value + " Minute(n)." + "<br>";
//                     }
//                         break;
//                     case "temperaturKonsistenz":
//                         if (entry[1] != "" && temperature) {
//                             let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById("TemperaturKonsistenz");
//                             console.log(stepper.value);
//                             displayAnweisungen.innerHTML += "Die Konsistenz deines Tranks sollte" + "&nbsp" + "'" + stepper.value + "'" + "sein." + "<br>";
//                     }
//                         break;
//                     case "temperaturFarbe":
//                         if (entry[1] != "" && temperature) {
//                             let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
//                             console.log(stepper.value);
//                             displayAnweisungen.innerHTML += "Befolge die Anweisungen, bis die Trankfarbe" + "&nbsp" + stepper.value + " ist." + "<br>";
//                     }
//                         break;
//                     default:
//                 }
//             }
//         displayAnweisungen.innerHTML += "<br>";
//         }
//     function displayStir(): void {
//         let displayAnweisungen: HTMLDivElement = <HTMLDivElement>document.querySelector("#display_anweisungen");
//         let intensity: boolean = false;
//         let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("#action"));
//         for (let entry of formData) {
//             switch (entry[0]) {      
//                 case "rührIntensität":
//                     if (entry[1] != "0") {
//                         displayAnweisungen.innerHTML += "Rühre deinen Zaubertrank mit einer Intensität von" + "&nbsp" + entry[1] +  "&nbsp" + "Stufe(n)" + "<br>";
//                         intensity = true;
//                     }
//                     break;
//                 case "rührDauer":
//                     if (entry[1] != "0" && intensity) {
//                     let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById("dauer2");
//                     console.log(stepper.value);
//                     displayAnweisungen.innerHTML += "Tue dies solange, bis " + stepper.value + " Minute(n) vergangen sind" + "<br>";
//                     }
//                     break;
//                     case "rührKonsistenz":
//                         if (entry[1] != "" && intensity) {
//                         let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById("RührKonsistenz");
//                         console.log(stepper.value);
//                         displayAnweisungen.innerHTML += "und dein Trank die Konsistenz " + "'" + stepper.value + "'" + " erreicht." + "<br>";
//                         }
//                         break;
//                     case "rührFarbe":
//                         if (entry[1] != "" && intensity) {
//                         let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
//                         console.log(stepper.value);
//                         displayAnweisungen.innerHTML += "Die Farbe deines Zaubertranks sollte nun " + stepper.value + " sein." + "<br>";
//                         }
//                         break;
//                     default:
//                 }
//             }
//         displayAnweisungen.innerHTML += "<br>";
//         }
//     function convertCurrency(_total: number): string {
//         let adjustedPrice: string = "";
//         let knut: string;
//         let sickel: string;
//         let galleonen: string;
//         let remainder: number;
//         galleonen = (Math.floor(_total / 493)).toString();
//         remainder = _total % 493;
//         sickel = (Math.floor(remainder / 29)).toString();
//         remainder = remainder % 29;
//         knut = remainder.toString();
//         if (galleonen != "0") {
//             adjustedPrice = galleonen + " Galleonen, " + sickel + " Sickel und " + knut + " Knut";
//         }
//         else if (sickel != "0") {
//             adjustedPrice = sickel + " Sickel und " + knut + " Knut";
//         }
//         else {
//             adjustedPrice = knut + " Knut";
//         }
//         return adjustedPrice;
//     }
// }
//# sourceMappingURL=hexenkessel.js.map