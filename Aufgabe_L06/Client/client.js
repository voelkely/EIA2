"use strict";
var L06_Hexenkessel;
(function (L06_Hexenkessel) {
    async function sendPotion() {
        let form = new FormData(document.forms[0]);
        let url = "http://localhost5001";
        let query = new URLSearchParams(form);
        let select = document.querySelector("select"); // sortiert das Select Element aus dem HTML // bei Text area if schleife weil da auch nichts drin  steht
        url = url + "?" + query.toString() + "&wirkung=" + select.value;
        let response = await fetch(url);
        console.log(response);
        let reply = await response.text(); // antwort vom text?
        console.log(reply);
        alert("Potion sent");
    }
    L06_Hexenkessel.sendPotion = sendPotion;
})(L06_Hexenkessel || (L06_Hexenkessel = {}));
//# sourceMappingURL=client.js.map