"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        var form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        console.log(_event);
        var effect = document.querySelector("select");
        console.log(effect.value);
        //let form: HTMLInputElement= [HTMLInputElement] document.querySelector("input");
        //potion.innerHTML += form.value
        var inputs = document.querySelectorAll("input");
        console.log(inputs);
        //let potion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#potion");
        //potion.innerHTML = "";
        var potion = [HTMLInputElement], document, querySelector;
        ("input");
        potion.innerHTML += potion.value;
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            if (entry[0] == "Effect")
                potion.innerHTML += entry[1];
            else
                potion.innerHTML += item.name;
            potion.innerHTML += item.name + "  € " + price + "</br>";
        }
    }
    function displayAmount(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
