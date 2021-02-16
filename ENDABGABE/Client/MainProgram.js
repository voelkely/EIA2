"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    window.addEventListener("load", handleLoad);
    //let url: string = "http://localhost:5001";
    let url = "https://mycodingapp97.herokuapp.com";
    let selector;
    let moveables = [];
    let rocketInUse; // eine globale variable die sich auf das Interface bezieht und deren daten enthält 
    //STARTING WITH FUNCTIONS:
    function handleLoad(_event) {
        let addBtn = document.querySelector("button#add");
        addBtn.addEventListener("click", sendRocketData);
        let loadBtn = document.querySelector("Button#load");
        loadBtn.addEventListener("click", getRocketData);
        let soundBtn = document.querySelector("button#BtnSound");
        soundBtn.addEventListener("click", playAudio);
        let pauseBtn = document.querySelector("button#BtnPause");
        pauseBtn.addEventListener("click", pauseAudio);
        //Canvas:
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Endabgabe_Feuerwerk.crc2 = canvas.getContext("2d");
        Endabgabe_Feuerwerk.crc2.fillStyle = "rgba (0, 0, 0, 0.05)";
        Endabgabe_Feuerwerk.crc2.fillRect(0, 0, Endabgabe_Feuerwerk.crc2.canvas.width, Endabgabe_Feuerwerk.crc2.canvas.height);
        canvas.addEventListener("click", createFirework);
        window.setInterval(update, 10);
    } //handleLoad zu
    async function sendRocketData(_event) {
        console.log("Rocket send to Server");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "/send" + "?" + query.toString());
        let responseReply = await response.text();
        console.log(responseReply); //IM CONSOLE LEER
        alert("Your Rocket is successfully sent to a space Server!");
    } //sendRocketData zu
    async function getRocketData() {
        console.log("find my Rockets");
        let response = await fetch(url + "/retrieve");
        let responseText = await response.text();
        let rocketArray = JSON.parse(responseText); //Array mit Daten
        console.log(responseText);
        console.log(JSON.parse(responseText));
        //console.log((rocketArray[3] as unknown as DataCollection).nameFirework);
        createSelect(rocketArray);
    } //getRocketData zu
    function createSelect(_allRockets) {
        console.log("load my RocketData");
        let select = document.createElement("select"); //dynmaisch "select" erstellen
        let fieldset = document.querySelector("fieldset#selectRocket");
        fieldset.appendChild(select);
        for (let i = 0; i < _allRockets.length; i++) {
            let currentRocket = _allRockets[i];
            /* let rocketname: string = currentRocket.nameFirework;
            let color: string  = currentRocket.Color;
            let lifetime: number  = currentRocket.lifetime;
            let shape: string = currentRocket.shape;
            let amount: number = currentRocket.amount;
            
            //radius anstelle von amount dynamisch übergebbar
             */
            let optionName = document.createElement("option");
            optionName.text = currentRocket.nameFirework;
            optionName.value = currentRocket.nameFirework;
            select.appendChild(optionName);
            //rocketInUse = currentRocket;
            //console.log(rocketInUse);
            select.addEventListener("change", () => { rocketInUse = currentRocket; });
        }
    } //createSelect zu
    function createFirework(_event) {
        console.log("creating firework");
        let mousePosX = _event.offsetX;
        let mousePosY = _event.offsetY;
        console.log(mousePosY);
        let amount = 40;
        let radius = (Math.PI * 2) / amount;
        debugger;
        console.log(rocketInUse?.amount);
        for (let i = 0; i < amount; i++) {
            if (rocketInUse == null) {
                return;
            }
            let firework;
            switch (rocketInUse.shape) {
                case "star":
                    firework = new Endabgabe_Feuerwerk.StarParticle(rocketInUse.Color, 15, mousePosX, mousePosY, i, radius, rocketInUse.shape);
                    moveables.push(firework);
                    break;
                case "circle":
                    firework = new Endabgabe_Feuerwerk.CircleParticle(rocketInUse.Color, 15, mousePosX, mousePosY, i, radius, rocketInUse.shape);
                    moveables.push(firework);
                    // console.log(moveables);
                    break;
                default:
                    break;
            }
            fireworkSound();
        }
        /*
                for (let i: number = 0; i < amount; i++) {
                    let particles: Moveable = new StarParticle("yellow", 15, mousePosX, mousePosY, i, radius, "star");
                    moveables.push(particles);
                 } */
    } //createFirework zu
    function update() {
        // debugger;
        Endabgabe_Feuerwerk.crc2.fillStyle = "rgba(0, 0, 0, 0.06)";
        Endabgabe_Feuerwerk.crc2.fillRect(0, 0, Endabgabe_Feuerwerk.crc2.canvas.width, Endabgabe_Feuerwerk.crc2.canvas.height);
        for (let firework of moveables) {
            firework.move(1 / 5);
            firework.draw();
        }
        deleteExpandables();
    } // update zu
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    } // deleteExpandable zu
    function playAudio() {
        let sound = document.getElementById("myAudio");
        sound.play();
    } //playAudio zu
    function pauseAudio() {
        let sound = document.getElementById("myAudio");
        sound.pause();
    } //pauseAudio zu
    function fireworkSound() {
        let sound = document.getElementById("boom");
        sound.play();
    } //fireworkSound zu
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=MainProgram.js.map