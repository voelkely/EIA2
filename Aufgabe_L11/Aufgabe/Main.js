"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    window.addEventListener("load", handleLoad);
    let imgData;
    let schneeflocken = []; //wenn ich mehrere brauche 
    let skifahrer = [];
    let moveables = [];
    let lift;
    let baum = new L11_Skipiste.Tree();
    let haus = new L11_Skipiste.House();
    L11_Skipiste.clickStop = true;
    function handleLoad(_event) {
        console.log("starting Animation");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Skipiste.crc2 = canvas.getContext("2d");
        L11_Skipiste.drawCanvas();
        imgData = L11_Skipiste.crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds
        canvas.addEventListener("click", stopLift);
        canvas.addEventListener("click", hitSkier);
        createSnowflakes(5000);
        createSkier(6);
        createLift();
        animate();
    }
    //Funktion "hitSkier" --> klickt man auf den Skifahrer beginnt dieser wieder von seiner Startposition zu fahren!
    function hitSkier(_event) {
        let mousePosition = new L11_Skipiste.Vector(_event.clientX - L11_Skipiste.crc2.canvas.offsetLeft, _event.clientY - L11_Skipiste.crc2.canvas.offsetTop); //position meiner maus
        for (let oneSkier of skifahrer) {
            if (oneSkier.position.x - oneSkier.hitRadius < mousePosition.x && oneSkier.position.x + oneSkier.hitRadius > mousePosition.x) {
                if (oneSkier.position.y - oneSkier.hitRadius < mousePosition.y && oneSkier.position.y + oneSkier.hitRadius > mousePosition.y) //position des Skiers
                    oneSkier.position = new L11_Skipiste.Vector(0, oneSkier.y); //Fängt wieder oben an
                console.log(oneSkier.position);
            }
        }
    }
    //Funktion "stopLift" --> klickt man auf den Lift stoppt dieser für 5 sekunden und setzt sich danach von seiner aktuellen Position wieder in Bewegung!
    function stopLift(_event) {
        debugger;
        let mousePosition = new L11_Skipiste.Vector(_event.clientX - L11_Skipiste.crc2.canvas.offsetLeft, _event.clientY - L11_Skipiste.crc2.canvas.offsetTop);
        if (lift.position.x - lift.hitRadius < mousePosition.x && lift.position.x + lift.hitRadius > mousePosition.x) {
            if (lift.position.y - lift.hitRadius < mousePosition.y && lift.position.y + lift.hitRadius > mousePosition.y) {
                L11_Skipiste.clickStop = true; //Debugger geht nicht hier rein sondern springt gleich weiter   
            }
            if (L11_Skipiste.clickStop == true) {
                window.setTimeout(startLift, 5000); //Nach 5 sekunden soll der Lift wieder weiter fahren!
            }
        }
    }
    //Funktion "startLift" --> wird nach den nach den 5 sekunden pause aufgerufen --> hier setzt sich der lift wieder in bewegung (allerdings fehlte mir hier der Ansatz)
    function startLift(_stopLift) {
        lift.position = new L11_Skipiste.Vector(lift.position.x, lift.position.y);
    }
    //Schneeflocken
    function createSnowflakes(_nFlocken) {
        for (let i = 0; i < _nFlocken; i++) {
            let flocke = new L11_Skipiste.Snowflake();
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
            let oneSkier = new L11_Skipiste.Skier(y);
            y += 50;
            skifahrer.push(oneSkier);
        }
    }
    //Lift 
    function createLift() {
        lift = new Lift();
        console.log("create Lift");
        console.log(lift.position);
    }
    //animation
    function animate() {
        window.setTimeout(animate, 10);
        L11_Skipiste.crc2.clearRect(0, 0, L11_Skipiste.crc2.canvas.width, L11_Skipiste.crc2.canvas.height);
        L11_Skipiste.crc2.putImageData(imgData, 0, 0);
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
})(L11_Skipiste || (L11_Skipiste = {})); //namespace zu
//# sourceMappingURL=Main.js.map