"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //generateContent(data);   
        //let send: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#sendPotion");
        //send.addEventListener("click", sendPotion);
        //displayOrder();   
        function createRezept(_event) {
            var form = document.querySelector("#basic"); //Form Element wird benutzt, um aus ihm Informationen zu ziehen
            console.log(_event);
            var input = form.elements["name"].value; //Text 
            console.log(input);
            var textarea = form.elements["beschreibung"].value; //Textarea
            var select = form.elements["wirkung"].value; //Select
            var radio = form.elements["dauer"].value; //RadioButtons   
            var display = document.querySelector("#display_basic"); //Button hinzugefügt
            display.innerHTML += "Name:" + "&nbsp" + input + "</br>" + "Beschreibung:" + "&nbsp" + textarea + "</br>" + "Wirkung:" + "&nbsp" + select + "</br>" + "Dauer:" + "&nbsp" + radio + "</br>"; //Ausgabe im Rezept   
        }
        var addBasics = document.querySelector("button#add_basics");
        addBasics.addEventListener("click", createRezept);
        function createAnweisungen(_event) {
            var form = document.querySelector("#action");
            console.log(_event);
            var spider = form.elements["spinnenbeine"].value;
            var spiderValue = form.elements["legs_value"].value;
            var mint = form.elements["pfefferminz"].value;
            var mintValue = form.elements["mints_value"].value;
            var nail = form.elements["zehennägel"].value;
            var nailValue = form.elements["nails_value"].value;
            var egg = form.elements["ashwinder_eier"].value;
            var eggValue = form.elements["eggs_value"].value;
            var wing = form.elements["fledermausflügel"].value;
            var wingValue = form.elements["wings_value"].value;
            var eye = form.elements["beetle_augen"].value;
            var eyeValue = form.elements["eyes_value"].value;
            var fairy = form.elements["feenflügel"].value;
            var fairyValue = form.elements["fairy_value"].value;
            var feather = form.elements["jobberknoll_federn"].value;
            var featherValue = form.elements["feather_value"].value;
            var stone = form.elements["mondstein"].value;
            var stoneValue = form.elements["stone_value"].value;
            var anweisungen = document.querySelector("#anweisungen");
            anweisungen.innerHTML += "Packe" + "&nbsp" + spiderValue + "&nbsp" + spider + "," + mintValue + "&nbsp" + mint + "," + nailValue + "&nbsp" + nail +
                "</br>" + eggValue + "&nbsp" + egg + "," + wingValue + "&nbsp" + wing + "," + eyeValue + "&nbsp" + eye + "," + fairyValue + "&nbsp" + fairy +
                "</br>" + featherValue + "&nbsp" + feather + "," + stoneValue + "&nbsp" + stone + "&nbsp" + "zusammen in einen Zaubertopf." + "&nbsp" +
                "Bringe deinen Trank auf eine Temperatur von";
        }
        var addIngredients = document.querySelector("button#add_ingredients");
        addIngredients.addEventListener("click", createAnweisungen);
        var addTemperature = document.querySelector("button#add_temperature");
        addTemperature.addEventListener("click", createAnweisungen);
        var deleteOne = document.querySelector("button#delete");
        deleteOne.addEventListener("click", createDelete);
        function createDelete(_event) {
            for (;;
            //function sendPotion(_event: Event): void {
            // }
            )
                ;
        }
        //function sendPotion(_event: Event): void {
        // }
        function convertCurrency(_total) {
            var adjustedPrice = "";
            var knut;
            var sickel;
            var galleonen;
            var remainder;
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
        //function handleChange(_event: Event): void {   
        //console.log(_event);
        //let formData: FormData = new FormData(document.forms[0]);
        //for (let entry of formData) {
        //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
        //let price: number = Number(item.getAttribute("price"));
        //if (entry [0] == "Rezept")
        //rezept.innerHTML += entry [1];
        // else 
        //rezept.innerHTML += item.name;
        //rezept.innerHTML += item.name + "  GAL " + price + "</br>";
    }
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
