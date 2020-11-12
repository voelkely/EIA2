"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    let ausgabe;
    function handleLoad(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        console.log(_event);
        let ausgabe = document.querySelector("div#ausgabe");
        let effect = document.querySelector("select");
        ausgabe.innerHTML += effect.value;
        console.log(effect.value);
        //let textarea: HTMLInputElement = [HTMLInputElement] document.querySelector("textarea");
        //potion.innerHTML += textarea.value;
        //let text: HTMLInputElement = [HTMLInputElement] document.querySelector("text");
        //potion.innerHTML += text.value;
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        let potion = document.querySelector("div#ausgabe");
        potion.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            if (entry[0] == "Potion")
                potion.innerHTML += entry[1];
            else
                potion.innerHTML += item.name;
            potion.innerHTML += item.name + "  € " + price + "</br>";
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=Hexenkessel.js.map