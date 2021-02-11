"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let imgData;
    // let url: string =
    let fireworks = [];
    let oneParticle = [];
    //Function handleLoad
    function handleLoad(_event) {
        console.log("starting Firework");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Firework.crc2 = canvas.getContext("2d");
        Firework.drawCanvas();
        imgData = Firework.crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds
        canvas.addEventListener("click", createFirework);
        //chooseRocket();
        createParticle();
        startFirework();
    } //handleLoad zu   
    // Funktion Create Firework
    function createFirework(_event) {
        console.log("create Firework");
        for (let i = 0; i < 1; i++) {
            let firework = new Rocket(5, "blue"); //5 ist der Radius
            fireworks.push(firework);
        }
    } //createFirework zu
    //Funktion createParticle
    function createParticle() {
        for (let i = 0; i < 400; i++) {
            let oneParticle = new Particle();
            oneParticle.push(fireworks);
        }
    } //createParticle zu
    function startFirework(_event) {
        let mousePosition = new Firework.Vector(_event.clientX - Firework.crc2.canvas.offsetLeft, _event.clientY - Firework.crc2.canvas.offsetTop);
        let speed = new Firework.Vector(100, 200);
        let particle = new Particle(mousePosition, speed);
        fireworks.push(particle);
        console.log(particle);
    }
})(Firework || (Firework = {})); //namespace zu
//# sourceMappingURL=Main.js.map