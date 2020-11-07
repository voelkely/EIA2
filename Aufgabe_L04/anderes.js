"use strict";
function handleButton(_event) {
    var clickedButton = _event.target;
    var formData = new FormData(document.forms[1]);
    var anweisungen = document.querySelector("div#anweisungen");
    var p = document.createElement("p");
    if (clickedButton.id == "ingredients") {
        var menge = parseInt(document.querySelector("[name= 'Menge']").value);
        var price = menge * parseInt(select.selectedOptions[0].getAttribute("price"));
        p.innerHTML = "Füge" + document.querySelector("[name = 'Menge']").value + "Stück/ml" + Selection.value + "hinzu. (" + price;
        p.setAttribute("preis", price.toFixed(0));
        action.appendChild(p); //HÄÄÄ
    }
}
function displayAmount(_event) {
    var progress = document.querySelector("progress");
    var amount = _event.target.value;
    progress.value = parseFloat(amount);
}
