"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //generateContent(data);
        //form.addEventListener("change", createPotion);
        //let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("slider"); //??
        function createRezept(_event) {
            var form = document.querySelector("#basic");
            console.log(_event);
            var input = form.elements["name"].value;
            console.log(input);
            var display = document.querySelector("#display_basic");
            display.innerHTML = input + "textarea";
            var textarea = form.elements["beschreibung"].value;
            console.log(textarea);
        }
        var addBasics = document.querySelector("button#add_basics");
        addBasics.addEventListener("click", createRezept);
        //let add_ingredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_ingredients");  //?? WHY RED?
        //add_ingredients.addEventListener("click", add_ingredients);
        //function handleChange(_event: Event): void {   //WHAT IS THIS??
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
