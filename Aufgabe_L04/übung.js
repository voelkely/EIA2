"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
    }
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
    function displayIngredients() {
        var anweisungen = document.querySelector("form#anweisungen");
        var totalPrice = document.querySelector("#total");
        var formData = new FormData(document.querySelector("form#action"));
        // totalSpan.innerHTML = "";
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            if (entry[0] == "ingredients") {
                var selector = "[value='" + entry[1] + "']";
                var item = document.querySelector(selector);
                var associatedAmount = entry[1] + "Menge";
                var amount = Number(formData.get(associatedAmount));
                var itemprice = Number(item.getAttribute("price"));
                total += amount * itemprice;
                anweisungen.innerHTML += amount + " " + entry[1] + " hinzugeben." + "<br>";
            }
        }
        anweisungen.innerHTML += "<br>";
        var adjustedPrice = convertCurrency(total);
        totalPrice.innerHTML = "<p><strong>Preis: " + adjustedPrice;
    }
    var addIngredients = document.querySelector("button#add_ingredients");
    addIngredients.addEventListener("click", displayIngredients);
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
