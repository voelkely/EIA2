"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //generateContent(data);   
        //form.addEventListener("change", createPotion);
        //let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("slider"); //??
        function createRezept(_event) {
            var form = document.querySelector("#basic"); //Form Element wird benutzt, um aus ihm Informationen zu ziehen
            console.log(_event);
            var input = form.elements["name"].value; //Text 
            console.log(input);
            var textarea = form.elements["beschreibung"].value; //Textarea
            var select = form.elements["wirkung"].value; //Select
            var radio = form.elements["dauer"].value; //RadioButtons   
            var display = document.querySelector("#display_basic"); //Button hinzugefügt
            display.innerHTML += input + "</br>" + textarea + "</br>" + select + "</br>" + radio + "</br>"; //Ausgabe im Rezept   
        }
        var addBasics = document.querySelector("button#add_basics");
        addBasics.addEventListener("click", createRezept);
        function createAnweisungen(_event) {
            var form = document.querySelector("#action");
            console.log(_event);
            var spider = form.elements["spiderlegs"].value;
            var spiderValue = form.elements["legs_value"].value;
            var mint = form.elements["peppermints"].value;
            var mintValue = form.elements["mints_value"].value;
            var anweisungen = document.querySelector("#anweisungen");
            anweisungen.innerHTML += "Füge" + "s=s" + spider + spiderValue + "</br>" + mint + mintValue + "hinzu";
        }
        var addIngredients = document.querySelector("button#add_ingredients");
        addIngredients.addEventListener("click", createAnweisungen);
        //let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#action");
        //function handleChange(_event: Event): void {   
        //console.log(_event);
        //let effect: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
        //effect.innerHTML += effect.value;    
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        //let rezept: HTMLDivElement = <HTMLDivElement>document.querySelector("div#ausgabe");
        //rezept.innerHTML = "";
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
