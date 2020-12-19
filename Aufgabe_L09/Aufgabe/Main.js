"use strict";
var L09_Classes_Skipiste;
(function (L09_Classes_Skipiste) {
    window.addEventListener("load", handleLoad);
    let imgData;
    let schneeflocken = []; //wenn ich mehrere brauche 
    let skifahrer = [];
    let lift = new L09_Classes_Skipiste.Lift();
    let baum = new L09_Classes_Skipiste.Tree();
    let haus = new L09_Classes_Skipiste.House();
    // let up: boolean = true; 
    // let down: boolean = true;
    function handleLoad(_event) {
        console.log("starting Animation");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Classes_Skipiste.crc2 = canvas.getContext("2d");
        L09_Classes_Skipiste.drawCanvas();
        imgData = L09_Classes_Skipiste.crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds 
        createSnowflakes(1000); //Anzahl der Schneeflocken in meinem Canvas
        createSkier(4);
        createLift();
        animate();
        moveLift();
        moveUp();
        moveDown();
        //Schneeflocken
        function createSnowflakes(_nFlocken) {
            for (let i = 0; i < _nFlocken; i++) {
                let flocke = new L09_Classes_Skipiste.Snowflake(); //Eine flocke soll erstellt werden
                flocke.x = Math.random() * window.innerWidth;
                flocke.y = Math.random() * window.innerHeight;
                flocke.speed = (Math.random() + 1) * 0.1; //Geschwindigkeit des fallens der Flocken
                schneeflocken.push(flocke); // das array schneeflocken greift auf die einzelen Flocke zu und pusht diese
            }
        }
        //Skifahrer
        function createSkier(_nSkier) {
            let y = 200;
            for (let i = 0; i < _nSkier; i++) {
                let oneSkier = new L09_Classes_Skipiste.Skier(1, y);
                y += 50;
                skifahrer.push(oneSkier);
            }
        }
        //Lift 
        function createLift() {
            console.log("create Lift");
            lift.x = 500;
            lift.y = -125;
        }
    } //handleLoad zu
    //animation
    function animate() {
        window.setTimeout(animate, 20);
        L09_Classes_Skipiste.crc2.clearRect(0, 0, L09_Classes_Skipiste.crc2.canvas.width, L09_Classes_Skipiste.crc2.canvas.height);
        L09_Classes_Skipiste.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animation zu
    function moveObjects() {
        //Schneeflocken
        for (let i = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].move();
        }
        //Skifahrer
        for (let i = 0; i < skifahrer.length; i++) {
            skifahrer[i].move(1 / 60);
        }
    } //moveObject zu
    function moveLift() {
        console.log("move the lift");
    }
    function moveUp() {
        lift.moveUp(1 / 50);
    }
    function moveDown() {
        // lift.moveDown();
    }
    function drawObjects() {
        //Schneeflocken
        for (let i = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].draw();
        }
        // Skifahrer
        for (let i = 0; i < skifahrer.length; i++) {
            skifahrer[i].draw();
        }
        //Tree
        baum.draw();
        //Haus
        haus.draw();
        // Lift
        lift.draw();
    } //drawObject zu
})(L09_Classes_Skipiste || (L09_Classes_Skipiste = {})); //namespace zu
//# sourceMappingURL=Main.js.map