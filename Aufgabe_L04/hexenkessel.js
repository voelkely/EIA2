"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    var ausgabe;
    var formData;
    function handleLoad(_event) {
        L04_Hexenkessel.generateContent(L04_Hexenkessel.data);
        var form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function createPotion(_event) {
        var spider = (document.querySelector("#spiderlegs"));
        var mints = (document.querySelector("#peppermints"));
        var nails = (document.querySelector("#toenails"));
        var egg = (document.querySelector("#ashwinder egg"));
        var bat = (document.querySelector("#bat wing"));
        var eye = (document.querySelector("#beetle eye"));
        var fairy = (document.querySelector("#fairy wing)));
        var feather = (document.querySelector("#jobberknoll feather"));
        var moonstone = (document.querySelector("#moonstone"));
        var temperature = (document.querySelector("#celsius"));
        var stir = (document.querySelector("#stir"));
        var slow = (document.querySelector("#slow"));
        var fast = (document.querySelector("#fast"));
        var thick = (document.querySelector("#thick"));
        var slimy = (document.querySelector("#slimy"));
        var aqueous = (document.querySelector("#aqueous"));
        var gaseous = (document.querySelector("#gaseous"));
        var steamy = (document.querySelector("#steamy"));
        var color = (document.querySelector("#color"));
    }
    function handleChange(_event) {
        console.log(_event);
        var effect = document.querySelector("select");
        effect.innerHTML += effect.value;
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
