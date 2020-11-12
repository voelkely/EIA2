"use strict";
function handleButton(_event) {
    let clickedButton = _event.target;
    let formData = new FormData(document.forms[1]);
    let anweisungen = document.querySelector("div#anweisungen");
    let p = document.createElement("p");
    if (clickedButton.id == "ingredients") {
        let menge = parseInt(document.querySelector("[name= 'Menge']").value);
        let price = menge * parseInt(select.selectedOptions[0].getAttribute("price"));
        p.innerHTML = "Füge" + document.querySelector("[name = 'Menge']").value + "Stück/ml" + Selection.value + "hinzu. (" + price;
        p.setAttribute("preis", price.toFixed(0));
        action.appendChild(p); //HÄÄÄ
    }
}
function displayAmount(_event) {
    let progress = document.querySelector("progress");
    let amount = _event.target.value;
    progress.value = parseFloat(amount);
}
//# sourceMappingURL=anderes.js.map