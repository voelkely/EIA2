"use strict";
var L06_Hexenkessel;
(function (L06_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    let form;
    //let url: string = "index2.html";
    let url = "http://localhost:5001";
    function handleLoad(_event) {
        getData();
        let addBasics = document.querySelector("button#add_basics");
        let addIngredients = document.querySelector("button#add_ingredients");
        let addTemperature = document.querySelector("button#add_temperature");
        let addStiring = document.querySelector("button#add_stiring");
        let submit = document.querySelector("button#sendPotion");
        addBasics.addEventListener("click", createRezept); // Hier werden die Basics ausgegeben 
        addIngredients.addEventListener("click", createAnweisungen); // Hier werden Zutaten, Temperatur und Rühren ausgegeben
        addTemperature.addEventListener("click", displayTemperature);
        addStiring.addEventListener("click", displayStir);
        submit.addEventListener("click", sendPotion); // asynchrone Funktion, damit das Rezept an Server gesendet wird
    }
    async function getData() {
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L06_Hexenkessel.generateContent(data);
    }
    async function sendPotion(_event) {
        console.log("send order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + "hahah");
        let responseText = await response.text();
        alert(responseText);
    }
    function createRezept(_event) {
        let form = document.querySelector("#basic"); //Form Element wird benutzt, um aus ihm Informationen zu ziehen
        //console.log(_event);
        let input = document.querySelector("input"); //Text 
        let textarea = document.querySelector("textarea"); //Textarea
        let select = document.querySelector("select"); //Select
        let radio = form.elements["dauer"].value; //RadioButtons (HIER GEHT DAS MIT DEM QUERY.SLECTOR NICHT --> NULL)
        let display = document.querySelector("#display_basic"); //Ausgabe
        display.innerHTML = ""; //leert das Array sodass sich die Ausgabe nicht wiederholt, wenn man button erneut klickt!
        display.innerHTML += "Name:" + "&nbsp" + input.value + "</br>" + "Beschreibung:" + "&nbsp" + textarea.value + "</br>" + "Wirkung:" + "&nbsp" + select.value + "</br>" + "Dauer:" + "&nbsp" + radio + "</br>"; //Ausgabe im Rezept 
    }
    function createAnweisungen(_event) {
        let formData = new FormData(document.forms[1]); //Das Form Element aus dem die Infos gezogen werden sollen (Action)
        let displayAnweisungen = document.querySelector("#display_anweisungen"); //Ausgabe sowie let display oben
        let outputTotal = document.querySelector("#total");
        let total = 0;
        outputTotal.innerHTML = "";
        displayAnweisungen.innerHTML = "Füge deine Zutaten:" + "</br>";
        for (let entry of formData) {
            //console.log(entry);
            if (entry[0] == "Ingredients") {
                let stepper = document.getElementById(entry[1] + "_amount");
                let amount = parseInt(stepper.value);
                console.log(stepper.value);
                let priceElement = document.querySelector("[value='" + entry[1] + "']");
                let price = parseInt(priceElement.getAttribute("price"));
                total += price;
                let gesamtpreis = price * amount; // keine ahnung warum mir das hier rot markiert wird...
                console.log(price * amount);
                displayAnweisungen.innerHTML += stepper.value + " " + entry[1] + " " + "(" + gesamtpreis + "&nbsp" + "GAL" + ")" + "</br>";
            }
        }
        displayAnweisungen.innerHTML += " in einen Zaubertopf." + "</br>";
        let adjustedPrice = convertCurrency(total);
        //console.log(total);
        outputTotal.innerHTML = "<p><strong>Preis: " + "&nbsp" + adjustedPrice;
    }
    function displayTemperature() {
        let displayAnweisungen = document.querySelector("#display_anweisungen");
        let temperature = false;
        let formData = new FormData(document.querySelector("#action"));
        for (let entry of formData) {
            switch (entry[0]) {
                case "temperatur":
                    if (entry[1] != "") {
                        displayAnweisungen.innerHTML += "</br>" + "Als nächstes musst du deinen Zaubertrank" + "&nbsp" + entry[1] + "." + "<br>";
                        temperature = true;
                    }
                    break;
                case "temperaturGrad":
                    if (entry[1] != "" && temperature) {
                        displayAnweisungen.innerHTML += "Bringe deinen Trank auf eine Temperatur von" + "&nbsp" + entry[1] + " °C." + "<br>";
                    }
                    break;
                case "temperaturDauer":
                    if (entry[1] != "" && temperature) {
                        let stepper = document.getElementById("dauer1");
                        console.log(stepper.value);
                        displayAnweisungen.innerHTML += "Koche die Zutaten für einen Zeitraum von" + "&nbsp" + stepper.value + " Minute(n)." + "<br>";
                    }
                    break;
                case "temperaturKonsistenz":
                    if (entry[1] != "" && temperature) {
                        let stepper = document.getElementById("TemperaturKonsistenz");
                        console.log(stepper.value);
                        displayAnweisungen.innerHTML += "Die Konsistenz deines Tranks sollte" + "&nbsp" + "'" + stepper.value + "'" + "sein." + "<br>";
                    }
                    break;
                case "temperaturFarbe":
                    if (entry[1] != "" && temperature) {
                        let stepper = document.getElementById("color");
                        console.log(stepper.value);
                        displayAnweisungen.innerHTML += "Befolge die Anweisungen, bis die Trankfarbe" + "&nbsp" + stepper.value + " ist." + "<br>";
                    }
                    break;
                default:
            }
        }
        displayAnweisungen.innerHTML += "<br>";
    }
    function displayStir() {
        let displayAnweisungen = document.querySelector("#display_anweisungen");
        let intensity = false;
        let formData = new FormData(document.querySelector("#action"));
        for (let entry of formData) {
            switch (entry[0]) {
                case "rührIntensität":
                    if (entry[1] != "0") {
                        displayAnweisungen.innerHTML += "Rühre deinen Zaubertrank mit einer Intensität von" + "&nbsp" + entry[1] + "&nbsp" + "Stufe(n)" + "<br>";
                        intensity = true;
                    }
                    break;
                case "rührDauer":
                    if (entry[1] != "0" && intensity) {
                        let stepper = document.getElementById("dauer2");
                        console.log(stepper.value);
                        displayAnweisungen.innerHTML += "Tue dies solange, bis " + stepper.value + " Minute(n) vergangen sind" + "<br>";
                    }
                    break;
                case "rührKonsistenz":
                    if (entry[1] != "" && intensity) {
                        let stepper = document.getElementById("RührKonsistenz");
                        console.log(stepper.value);
                        displayAnweisungen.innerHTML += "und dein Trank die Konsistenz " + "'" + stepper.value + "'" + " erreicht." + "<br>";
                    }
                    break;
                case "rührFarbe":
                    if (entry[1] != "" && intensity) {
                        let stepper = document.getElementById("color");
                        console.log(stepper.value);
                        displayAnweisungen.innerHTML += "Die Farbe deines Zaubertranks sollte nun " + stepper.value + " sein." + "<br>";
                    }
                    break;
                default:
            }
        }
        displayAnweisungen.innerHTML += "<br>";
    }
    function convertCurrency(_total) {
        let adjustedPrice = "";
        let knut;
        let sickel;
        let galleonen;
        let remainder;
        galleonen = (Math.floor(_total / 493)).toString();
        remainder = _total % 493;
        sickel = (Math.floor(remainder / 29)).toString();
        remainder = remainder % 29;
        knut = remainder.toString();
        if (galleonen != "0") {
            adjustedPrice = galleonen + " Galleonen, " + sickel + " Sickel und " + knut + " Knut";
        }
        else if (sickel != "0") {
            adjustedPrice = sickel + " Sickel und " + knut + " Knut";
        }
        else {
            adjustedPrice = knut + " Knut";
        }
        return adjustedPrice;
    }
})(L06_Hexenkessel || (L06_Hexenkessel = {}));
//# sourceMappingURL=hexenkessel.js.map