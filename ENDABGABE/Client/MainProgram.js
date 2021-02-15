"use strict";
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    window.addEventListener("load", handleLoad);
    //let url: string = "http://localhost:5001";
    let url = "https://mycodingapp97.herokuapp.com";
    let selector;
    let moveables = [];
    let rocketInUse = []; //bezieht sich auf das Interface und enthält deren daten
    //STARTING WITH FUNCTIONS:
    function handleLoad(_event) {
        let addBtn = document.querySelector("button#add");
        addBtn.addEventListener("click", sendRocketData);
        let loadBtn = document.querySelector("Button#load");
        loadBtn.addEventListener("click", getRocketData);
        let clickOnSelect = document.querySelector("form#collection");
        clickOnSelect.addEventListener("change", chooseRocket);
        let soundBtn = document.querySelector("button#BtnSound");
        soundBtn.addEventListener("click", playAudio);
        let pauseBtn = document.querySelector("button#BtnPause");
        pauseBtn.addEventListener("click", pauseAudio);
        getRocketData();
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
        console.log(responseText);
        createSelect(_allRockets);
    } //getRocketData zu
    function createSelect(_allRockets) {
        console.log("load my values");
        let name = _allRockets.name;
        let color = _allRockets.color;
        let lifetime = _allRockets.lifetime;
        let shape = _allRockets.shape;
        let amount = _allRockets.amount;
        /* let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {

            let rocketname: string = String(formData.get("nameRocket"));
            let lifetime: number = Number(formData.get("lifetime"));
            let color: string = String(formData.get("color"));
            let amountParticles: number = Number(formData.get("particles"));
            let shape: string = String(formData.get("shapePart"));
            switch (entry[1]) {
                case "circle":
                  shape = "circle";
                  break;
                case "star":
                  shape = "star";
                  break;
            }

       } */
    } //createSelect zu
    function chooseRocket() {
        console.log("is picked rocket filled?");
        let formDataCollection = new FormData(document.forms[0]);
        let rocketcreated = true; //Wurde die richtige Rakete ausgewählt?
        for (let entry of formDataCollection) {
            selector = document.querySelector("[value='" + entry[0] + entry[1] + "']");
            //  console.log(entry[0]); //Entry0 sind name, lifetime, particles??
            //   console.log(entry [1]); //Entry 1 sind color, shape, sekundenzahl und der amount??
            if (entry[0] == "Stardust" || entry[0] == "Space Buddy" || entry[0] == "Galaxy Shooter" || entry[0] == "Firecracker" || entry[0] == "Space Fighter") {
                rocketcreated = true;
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
        let amount = 20; //sollte eigentlich durch User definiert werden
        let radius = (Math.PI * 2) / amount;
        for (let i = 0; i < amount; i++) {
            let particle = new Endabgabe_Feuerwerk.CircleParticle("#8f18f0", 15, mousePosX, mousePosY, i, radius, "circle"); //color, speed, position, i, radius, shape
            moveables.push(particle);
        }
        //  fireworkSound();
        /* for (let i: number = 0; i < amount; i++) {
            let particles: Moveable = new StarParticle("yellow", 15, mousePosX, mousePosY, i, radius, "star");
            moveables.push(particles);
            } */
    } //createFirework zu
    function update() {
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
    /* function fireworkSound(): void {
        let sound: HTMLAudioElement = <HTMLAudioElement>document.getElementById("boom");
        sound.play(); */
    //} *///fireworkSound zu
})(Endabgabe_Feuerwerk || (Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=MainProgram.js.map