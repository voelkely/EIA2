"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    var ausgabe;
    var formData;
    function handleLoad(_event) {
        //console.log("Start");
        L04_Hexenkessel.generateContent(L04_Hexenkessel.data);
        var form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        console.log(_event);
        var effect = document.querySelector("select");
        effect.innerHTML += effect.value;
        //let textarea: HTMLInputElement = [HTMLInputElement] document.querySelector("textarea");
        //potion.innerHTML += textarea.value;
        //let text: HTMLInputElement = [HTMLInputElement] document.querySelector("text");
        //potion.innerHTML += text.value;
        var inputs = document.querySelectorAll("input");
        console.log(inputs);
        var ausgabe = document.querySelector("div#ausgabe");
        ausgabe.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            if (entry[0] == "Your Potion")
                ausgabe.innerHTML += entry[1];
            else
                ausgabe.innerHTML += item.name;
            ausgabe.innerHTML += item.name + "  GAL " + price + "</br>";
        }
    }
    function displayAmount(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
