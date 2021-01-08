"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    window.addEventListener("load", handleLoad);
    let imgData;
    let schneeflocken = []; //wenn ich mehrere brauche 
    let skifahrer = [];
    let moveables = [];
    let lift;
    let baum = new L10_Inheritance_Skipiste.Tree();
    let haus = new L10_Inheritance_Skipiste.House();
    function handleLoad(_event) {
        console.log("starting Animation");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Inheritance_Skipiste.crc2 = canvas.getContext("2d");
        L10_Inheritance_Skipiste.drawCanvas();
        imgData = L10_Inheritance_Skipiste.crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds 
        createSnowflakes(5000); //Anzahl der Schneeflocken in meinem Canvas
        createSkier(4);
        createLift();
        animate();
    }
    //Schneeflocken
    function createSnowflakes(_nFlocken) {
        for (let i = 0; i < _nFlocken; i++) {
            let flocke = new L10_Inheritance_Skipiste.Snowflake();
            flocke.x = Math.random() * window.innerWidth;
            flocke.y = Math.random() * window.innerHeight;
            flocke.speed2 = (Math.random() + 1) * 0.1;
            schneeflocken.push(flocke);
        }
    }
    //Skifahrer
    function createSkier(_nSkier) {
        let y = 200;
        for (let i = 0; i < _nSkier; i++) {
            let oneSkier = new L10_Inheritance_Skipiste.Skier(y);
            y += 50;
            skifahrer.push(oneSkier);
        }
    }
    //Lift 
    function createLift() {
        lift = new L10_Inheritance_Skipiste.Lift();
        console.log("create Lift");
        console.log(lift.position);
    }
    //animation
    function animate() {
        window.setTimeout(animate, 10);
        L10_Inheritance_Skipiste.crc2.clearRect(0, 0, L10_Inheritance_Skipiste.crc2.canvas.width, L10_Inheritance_Skipiste.crc2.canvas.height);
        L10_Inheritance_Skipiste.crc2.putImageData(imgData, 0, 0);
        moveMoveables();
        drawMoveables();
    } //animation zu
    function moveMoveables() {
        //Schneeflocken
        for (let i = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].move(1);
        }
        //Skifahrer
        for (let i = 0; i < skifahrer.length; i++) {
            skifahrer[i].move(1 / 80);
        }
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        moveUp();
    } //moveObject zu
    function moveUp() {
        // lift.position.x += 1;
        lift.moveUp(1 / 70);
    }
    function drawMoveables() {
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
        //Schneeflocken
        for (let i = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].draw();
        }
    } //drawObject zu
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {})); //namespace zu
//# sourceMappingURL=Main.js.map