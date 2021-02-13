"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    window.addEventListener("load", handleLoad);
    //let url: string = "http://localhost:5001";
    let url = "https://mycodingapp97.herokuapp.com";
    let rockets = [];
    //  let moveables: Moveable[] = [];
    function handleLoad(_event) {
        let addBtn = document.querySelector("button#add");
        addBtn.addEventListener("click", sendRocketData);
        let clickOnSelect = document.querySelector("form#collection");
        clickOnSelect.addEventListener("change", chooseRocket);
        getRocketData();
        //Canvas:
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Endabgabe_Feuerwerk.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", createFirework);
        drawBackground();
        window.setInterval(update, 20);
    } //handleLoad zu
    async function sendRocketData(_event) {
        console.log("Rocket send to Server");
        let formData = new FormData(document.forms[0]); //nimmt infos aus der Form "generator"
        let query = new URLSearchParams(formData);
        console.log(url + "/send" + "?" + query.toString());
        let response = await fetch(url + "/send" + "?" + query.toString());
        let responseReply = await response.text();
        alert("Rocket successfully sent!");
    } //sendRocketData zu
    async function getRocketData() {
        console.log("find Rockets");
        let response = await fetch(url + "?"); //was kommt da rein? theoretisch die URL der seite. Brauche ja keine Data.json oder?
        let responseText = await response.text();
        console.log(responseText);
    } //getRocketData zu
    function chooseRocket() {
        console.log("is picked rocket filled?");
        //HIER MÜSSEN NOCH DIE DATEN AUS DER DATENBANK ABGEFRAGT WERDEN!!!
        let formDataCollection = new FormData(document.forms[0]);
        let rocketcreated = true; //Wurde die richtige Rakete ausgewählt?
        for (let entry of formDataCollection) {
            let selector = document.querySelector("[value='" + entry[1] + "']");
            console.log(selector, "jajaj");
            console.log(entry[0]);
            if (entry[1] == "Stardust" || entry[1] == "Space Buddy" || entry[1] == "Galaxy Shooter" || entry[1] == "Firecracker" || entry[1] == "Space Fighter") {
                createFirework();
            }
            else {
                rocketcreated = false;
            }
        }
        if (rocketcreated != true) {
            alert("This Rocket ist empty. Please try another one");
        }
    } //chooseRocket zu
    function createFirework(_event) {
        console.log("creating firework");
        let mousePosX = _event.offsetX;
        let mousePosY = _event.offsetY;
        let amount = 100;
        let offset = (Math.PI * 2) / amount;
        for (let i = 0; i < amount; i++) {
            let oneParticle = new Endabgabe_Feuerwerk.Rockets("green", 2, mousePosX, mousePosY, i, offset);
            rockets.push(oneParticle);
        }
    } //createFirework zu
    function update() {
        //  console.log("update");
        Endabgabe_Feuerwerk.crc2.fillStyle = "rgba(0, 0, 0, 0.06)";
        Endabgabe_Feuerwerk.crc2.fillRect(0, 0, Endabgabe_Feuerwerk.crc2.canvas.width, Endabgabe_Feuerwerk.crc2.canvas.height);
        for (let rocketParticle of rockets) {
            rocketParticle.move(1 / 10);
            rocketParticle.draw();
        }
        deleteExpandables();
    } // update zu
    function deleteExpandables() {
        // console.log("delete");
        for (let i = rockets.length - 1; i >= 0; i--) {
            if (rockets[i].expendable)
                rockets.splice(i, 1);
        }
    } // deleteExpandable zu
    function drawBackground() {
        console.log("background drawn");
        Endabgabe_Feuerwerk.crc2.fillStyle = "rgba (0, 0, 0, 0.05)";
        Endabgabe_Feuerwerk.crc2.fillRect(0, 0, Endabgabe_Feuerwerk.crc2.canvas.width, Endabgabe_Feuerwerk.crc2.canvas.height);
    } //drawBackground zu
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=MainProgram.js.map