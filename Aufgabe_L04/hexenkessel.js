"use strict";
// namespace L04_Hexenkessel {
//     window.addEventListener("load", handleLoad);
//     function handleLoad(_event: Event): void {
//     generateContent(data); 
//     let addBasics: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_basics");
//     let addIngredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_ingredients");
//     let addTemperature: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_temperature");
//     let addStiring: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_stiring");
//     let sendSnape: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#sendPotion");
//     let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#reset");
//     addBasics.addEventListener("click", createRezept);
//     addIngredients.addEventListener("click", createAnweisungen);
//     //addTemperature.addEventListener("click", displayTemperature);
//     addStiring.addEventListener("click", displayStir);
//     //sendSnape.addEventListener("click", sendPotion);
//     //reset.addEventListener("click", createReset) ;  
//     function createRezept(_event: Event): void {
//         let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#basic"); //Form Element wird benutzt, um aus ihm Informationen zu ziehen
//         //console.log(_event);
//         let input: string = form.elements["name"].value;  //Text 
//         //console.log(input);
//         let textarea: string = form.elements["beschreibung"].value; //Textarea
//         let select: string = form.elements["wirkung"].value; //Select
//         let radio: string = form.elements["dauer"].value; //RadioButtons   
//         let display: HTMLElement = <HTMLElement>document.querySelector("#display_basic");   //Button hinzugefügt
//         display.innerHTML = ""; //leert das Array sodass sich die Ausgabe nicht wiederholt, wenn man button erneut klickt!
//         display.innerHTML += "Name:" + "&nbsp" + input + "</br>" + "Beschreibung:" + "&nbsp" + textarea + "</br>" + "Wirkung:" + "&nbsp" + select + "</br>" + "Dauer:" + "&nbsp" + radio + "</br>";   //Ausgabe im Rezept   
//     }
//     function createAnweisungen(_event: Event): void {
//         //let form2: HTMLFormElement = <HTMLFormElement>document.querySelector("#action");
//         //let anweisungen: HTMLElement = <HTMLElement>document.querySelector("anweisungen");
//         //let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form#action"));
//        //console.log(_event);
//        // let formData = FormData: new FormData(document.forms[0]);
//         //anweisungen.innerHTML = "Packe";
//         //for (let entry of formData) {
//            // let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
//            // if (entry [0] == "ingredients") {
//                 //console.log(entry[0], entry[1]);
//                // anweisungen.innerHTML += entry[1] + " hinzu";
//                // }
//       //  }
//        // let spider: string = form.elements["spinnenbeine"].value;
//        // let spiderValue: number =  form.elements["legs_value"].value;
//        // let mint: string = form.elements["pfefferminz"].value;
//        // let mintValue: number =  form.elements["mints_value"].value;
//        // let nail: string = form.elements["zehennägel"].value;
//        // let nailValue: number =  form.elements["nails_value"].value;
//        // let egg: string = form.elements["ashwinder_eier"].value;
//        // let eggValue: number =  form.elements["eggs_value"].value;
//        // let wing: string = form.elements["fledermausflügel"].value;
//        // let wingValue: number =  form.elements["wings_value"].value;
//        // let eye: string = form.elements["beetle_augen"].value;
//        // let eyeValue: number =  form.elements["eyes_value"].value;
//       //  let fairy: string = form.elements["feenflügel"].value;
//        // let fairyValue: number =  form.elements["fairy_value"].value;
//        // let feather: string = form.elements["jobberknoll_federn"].value;
//        // let featherValue: number =  form.elements["feather_value"].value;
//        // let stone: string = form.elements["mondstein"].value;
//        // let stoneValue: number =  form.elements["stone_value"].value;
//        // let anweisungen: HTMLElement = <HTMLElement>document.querySelector("#anweisungen");
//        // anweisungen.innerHTML += "Packe" + "&nbsp" + spiderValue + "&nbsp" + spider + "," +  mintValue + "&nbsp" + mint + "," + nailValue + "&nbsp" + nail + 
//        // "</br>" + eggValue + "&nbsp" + egg + "," + wingValue + "&nbsp" + wing + "," + eyeValue + "&nbsp" + eye + "," + fairyValue + "&nbsp" + fairy + 
//        // "</br>" + featherValue + "&nbsp" + feather + "," + stoneValue + "&nbsp" + stone + "&nbsp" + "zusammen in einen Zaubertopf." + "&nbsp" +
//        // "Bringe deinen Trank auf eine Temperatur von";
//     }
//     //function sendPotion(_event: Event): void {
//    // }
//     function displayStir(): void {
//     let anweisungen: HTMLElement = <HTMLElement>document.querySelector("anweisungen");
//     let intensity: boolean = false;
//     let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("#action"));
//     for (let entry of formData) {
//         switch (entry[0]) {      
//             case "stir_intesity":
//                 if (entry[1] != "0") {
//                     anweisungen.innerHTML += "Rühren mit einer Intensität von " + entry[1] + "<br>";
//                 }
//                 break;
//             case "stir_time":
//                 if (entry[1] != "0" && intensity) 
//                     anweisungen.innerHTML += "➔ Rühren bis " + entry[1] + " Minute(n) vergangen sind." + "<br>";
//                 break;
//             case "stir_color":
//                 if (entry[1] != "keine Angabe" && intensity)
//                     anweisungen.innerHTML += "➔ Rühren bis die Trankfarbe " + entry[1] + " ist." + "<br>";
//                 break;
//             case "stir_consistency":
//                 if (entry[1] != "keine Angabe" && intensity) 
//                     anweisungen.innerHTML += "➔ Rühren bis die Konsistenz " + entry[1] + " ist." + "<br>";
//                 break;
//             default:
//         }
//     }
//     anweisungen.innerHTML += "<br>";
// }
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
//         //function handleChange(_event: Event): void {   
//             //console.log(_event);
//             //let formData: FormData = new FormData(document.forms[0]);
//             //for (let entry of formData) {
//                 //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
//                 //let price: number = Number(item.getAttribute("price"));
//                 //if (entry [0] == "Rezept")
//                     //rezept.innerHTML += entry [1];
//                // else 
//                     //rezept.innerHTML += item.name;
//                 //rezept.innerHTML += item.name + "  GAL " + price + "</br>";
//             }
//         }
//# sourceMappingURL=hexenkessel.js.map