"use strict";
var L08_Canvas_skipiste;
(function (L08_Canvas_skipiste) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62; //Goldener Schnitt
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 225 }, { x: 450, y: 150 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "lightgrey", "white"); //Das steht im AD im Kasten oben
        drawMountains({ x: 0, y: horizon }, 50, 100, "#FFFAFA", "lightgrey");
        drawBottom({ x: crc2.canvas.width, y: horizon }, 800, 800);
        drawHill();
        drawHouse();
        drawLift({ x: 700, y: 450 }); //Hier drinnen steht die Position des Sitzes am Lift
        drawTrees();
        drawPeople({ x: 550, y: 150 }, { x: 150, y: 150 });
        drawPeople({ x: 350, y: 350 }, { x: 150, y: 150 });
        drawSnow();
    }
    function drawBottom(_position, _widthBack, _widthFront) {
        console.log("Bottom", _position);
        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack, _position.y);
        crc2.lineTo(crc2.canvas.width + _widthFront, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width - _widthFront, crc2.canvas.height);
        crc2.lineTo(_position.x - _widthBack, _position.y);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#FFFAFA");
        gradient.addColorStop(0.6, "white");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawBackground() {
        console.log("background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawHill() {
        crc2.beginPath();
        crc2.moveTo(800, 200);
        crc2.stroke();
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.save();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
    }
    function drawSun(_position) {
        console.log("sun", _position);
        let r1 = 20;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 15;
        let radiusParticle = 100;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawHouse() {
        console.log("house");
        //Hütte
        crc2.beginPath();
        crc2.rect(450, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
        crc2.stroke();
        let gradient = crc2.createLinearGradient(0, 50, 0, 390);
        crc2.fillStyle = gradient;
        crc2.fillStyle = "#5c4411";
        crc2.fill();
        crc2.save();
        //Fenster
        crc2.fillStyle = "#c8cfcf";
        crc2.fillRect(475, 475, 100, 60);
        crc2.save();
        //Dach
        crc2.beginPath();
        crc2.moveTo(450, 450); //(300, 250)
        crc2.lineTo(525, 400); // (375, 175)
        crc2.lineTo(600, 450); // (450, 240)
        crc2.stroke();
        crc2.closePath();
        crc2.lineWidth = 15;
        crc2.strokeStyle = "#ebfcfc";
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.save();
        crc2.restore();
    }
    function drawTrees() {
        console.log("Trees");
        //Großer Baum
        crc2.beginPath();
        crc2.moveTo(575, 600);
        crc2.lineTo(600, 425);
        crc2.lineTo(625, 600);
        crc2.closePath();
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.save();
        crc2.lineWidth = 0;
        // Kleiner Baum
        crc2.beginPath();
        crc2.moveTo(425, 600);
        crc2.lineTo(450, 500);
        crc2.lineTo(475, 600);
        crc2.closePath();
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.save();
        crc2.restore();
    }
    function drawLift(_position) {
        console.log("lift", _position);
        crc2.beginPath();
        crc2.moveTo(600, 500);
        crc2.lineTo(800, 400);
        crc2.lineWidth = 3;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 75);
        crc2.lineTo(50, 50);
        crc2.lineTo(50, 75);
        crc2.lineWidth = 2;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.restore();
    }
    function drawPeople(_position, _size) {
        console.log("skier");
        crc2.save();
        for (let i = 0; i < 1; i++) {
            let color = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
            let randomColor = color[Math.floor(Math.random() * color.length)];
            let x = Math.random() * 350 + 50;
            let y = Math.random() * 500 + 450;
            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(20 * Math.PI / 180);
            //Skifahrer
            crc2.beginPath();
            crc2.rect(250, 350, 25, 5);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
            // Body
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = crc2.fillStyle;
            crc2.beginPath();
            crc2.ellipse(650, 350, 20, 10, 10, 10, 50);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.save();
            // Head
            crc2.beginPath();
            crc2.arc(627, 325, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#fce6ac";
            crc2.fill();
            crc2.lineWidth = 0;
            crc2.save();
            // Arm1
            crc2.beginPath();
            crc2.rect(620, 345, 25, 5);
            crc2.closePath();
            crc2.fillStyle = randomColor;
            crc2.fill();
            // SkiStock1
            crc2.save();
            crc2.restore();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.lineCap = "round";
            crc2.beginPath();
            crc2.moveTo(620, 347);
            crc2.lineTo(640, 380);
            crc2.closePath();
            crc2.stroke();
            // SkiStock2
            crc2.save();
            crc2.restore();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.lineCap = "round";
            crc2.beginPath();
            crc2.moveTo(620, 347);
            crc2.lineTo(660, 380);
            crc2.closePath();
            crc2.stroke();
            // Arm2
            crc2.save();
            crc2.beginPath();
            crc2.rect(620, 352, 25, 5);
            crc2.closePath();
            crc2.fillStyle = randomColor;
            crc2.fill();
            // Leg1
            crc2.restore();
            crc2.strokeStyle = randomColor;
            crc2.lineWidth = 4;
            crc2.lineCap = "round";
            crc2.beginPath();
            crc2.moveTo(650, 340);
            crc2.lineTo(670, 380); //Länge der Beine
            crc2.closePath();
            crc2.stroke();
            // Leg2
            crc2.save();
            crc2.restore();
            crc2.beginPath();
            crc2.moveTo(650, 340);
            crc2.lineTo(680, 380); //Länge der Beine
            crc2.closePath();
            crc2.strokeStyle = randomColor;
            crc2.lineWidth = 4;
            crc2.lineCap = "round";
            crc2.stroke();
            //Ski
            crc2.save();
            crc2.restore();
            crc2.beginPath();
            crc2.moveTo(100, 35);
            crc2.lineTo(40, 50);
            crc2.moveTo(500, 450);
            crc2.lineWidth = 4;
            crc2.lineCap = "round";
            crc2.strokeStyle = "black";
            crc2.stroke();
            //crc2.rect(640, 380, 60, 4);
            crc2.closePath();
        }
        crc2.restore();
    }
    function drawSnow() {
        for (let i = 0; i < 300; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let radiusSnowflake = Math.random() * 2.5 + 1;
            crc2.beginPath();
            crc2.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            crc2.fillStyle = "white";
            crc2.fill();
        }
    }
})(L08_Canvas_skipiste || (L08_Canvas_skipiste = {}));
//# sourceMappingURL=skipiste.js.map