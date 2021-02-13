"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    // let imgData: ImageData;
    let form;
    // let moveable: Moveable[] = []; 
    let particleArray = [];
    async function handleLoad(_event) {
        console.log("starting Firework");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Firework.crc2 = canvas.getContext("2d");
        Firework.drawCanvas();
        //imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds
        canvas.addEventListener("click", createFirework);
        // addBtn.addEventListener.
        //chooseRocket(); //abfrage ob ausgewählte Rakte gefüllt ist oder nicht
        window.setInterval(animate, 20);
        // getRocket(); //(async) wir erhalten die Daten wieder
        createTest();
    } //handleLoad zu   
    /* async function sendRocket(_event: Event): Promise<void> {
        console.log("send Rocket");

        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "http://localhost:5000/";
        //let url: string = "https://mycodingapp97.herokuapp.com";

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("selectRocket");

        url = url + "?" + query.toString() + select.value;

        let response: Response = await fetch(url);
        let reply: string = await response.text();
    
        alert(reply); */
    // sendRocket zu
    /* async function getRocket(): Promise<void> {
        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
       */
    // Funktion Create Firework
    function createFirework(_event) {
        console.log("create Firework");
        let mousePosX = _event.offsetX;
        let mousePosY = _event.offsetY;
        for (let i = 0; i < 1; i++) {
            let particles = new Firework.Moveable("blue", 3, mousePosX, mousePosY);
            particleArray.push(particles);
            for (let firework of particleArray) {
                firework.draw();
            }
        }
    }
    //createFirework zu
    function animate() {
        console.log("animation");
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //  for (let firework of particleArray) {
        // firework.draw();
        // }
    }
    function createTest() {
        console.log("test funktion");
        Firework.crc2.save();
        Firework.crc2.translate(0, 0);
        Firework.crc2.beginPath();
        Firework.crc2.moveTo(0, 0);
        Firework.crc2.lineTo(500, 400);
        Firework.crc2.lineWidth = 500;
        Firework.crc2.fillStyle = "white";
        Firework.crc2.stroke();
        Firework.crc2.restore();
    }
})(Firework || (Firework = {})); //namespace zu
//# sourceMappingURL=Main.js.map