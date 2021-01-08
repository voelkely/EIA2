"use strict";
var L10_Inheritance_Skipiste;
(function (L10_Inheritance_Skipiste) {
    function drawCanvas() {
        let golden = 0.62; //Goldener Schnitt
        let horizon = L10_Inheritance_Skipiste.crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 225 }, { x: 450, y: 150 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "lightgrey", "white"); //Das steht im AD im Kasten oben
        drawMountains({ x: 0, y: horizon }, 50, 100, "#FFFAFA", "lightgrey");
        drawHill();
        drawLine();
        drawHouse();
        drawTrees();
        function drawBackground() {
            console.log("background");
            let gradient = L10_Inheritance_Skipiste.crc2.createLinearGradient(0, 0, 0, L10_Inheritance_Skipiste.crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.6, "white");
            gradient.addColorStop(1, "white");
            L10_Inheritance_Skipiste.crc2.fillStyle = gradient;
            L10_Inheritance_Skipiste.crc2.fillRect(0, 0, L10_Inheritance_Skipiste.crc2.canvas.width, L10_Inheritance_Skipiste.crc2.canvas.height);
        }
        function drawSun(_position) {
            console.log("sun", _position);
            let r1 = 20;
            let r2 = 150;
            let gradient = L10_Inheritance_Skipiste.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60,100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.translate(_position.x, _position.y);
            L10_Inheritance_Skipiste.crc2.fillStyle = gradient;
            L10_Inheritance_Skipiste.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.restore();
        }
        function drawCloud(_position, _size) {
            console.log("Cloud", _position, _size);
            let nParticles = 15;
            let radiusParticle = 100;
            let particle = new Path2D();
            let gradient = L10_Inheritance_Skipiste.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.translate(_position.x, _position.y);
            L10_Inheritance_Skipiste.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_Inheritance_Skipiste.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L10_Inheritance_Skipiste.crc2.translate(x, y);
                L10_Inheritance_Skipiste.crc2.fill(particle);
                L10_Inheritance_Skipiste.crc2.restore();
            }
            L10_Inheritance_Skipiste.crc2.restore();
        }
        function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("Mountains");
            let stepMin = 50;
            let stepMax = 150;
            let x = 0;
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.translate(_position.x, _position.y);
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(0, 0);
            L10_Inheritance_Skipiste.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                L10_Inheritance_Skipiste.crc2.lineTo(x, y);
            } while (x < L10_Inheritance_Skipiste.crc2.canvas.width);
            L10_Inheritance_Skipiste.crc2.lineTo(x, 0);
            L10_Inheritance_Skipiste.crc2.closePath();
            let gradient = L10_Inheritance_Skipiste.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            L10_Inheritance_Skipiste.crc2.fillStyle = gradient;
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.restore();
        }
        function drawHill() {
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(0, 200);
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.lineTo(0, 600);
            L10_Inheritance_Skipiste.crc2.lineTo(800, 600);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.restore();
        }
        function drawTrees() {
            console.log("Trees");
            //Großer Baum rechts
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(550, 600);
            L10_Inheritance_Skipiste.crc2.lineTo(600, 425);
            L10_Inheritance_Skipiste.crc2.lineTo(650, 600);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "green";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.save();
            // Kleiner Baum rechts
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(525, 600);
            L10_Inheritance_Skipiste.crc2.lineTo(550, 500);
            L10_Inheritance_Skipiste.crc2.lineTo(575, 600);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "darkgreen";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.restore();
        }
        function drawLine() {
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(250, 500);
            L10_Inheritance_Skipiste.crc2.lineTo(800, 200);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.lineWidth = 3;
            L10_Inheritance_Skipiste.crc2.strokeStyle = "black";
            L10_Inheritance_Skipiste.crc2.stroke();
        }
        function drawHouse() {
            console.log("house");
            //Hütte
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.rect(200, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
            let gradient = L10_Inheritance_Skipiste.crc2.createLinearGradient(0, 50, 0, 390);
            L10_Inheritance_Skipiste.crc2.fillStyle = gradient;
            L10_Inheritance_Skipiste.crc2.fillStyle = "#5c4411";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.save();
            //Fenster
            L10_Inheritance_Skipiste.crc2.fillStyle = "#d3e6e6";
            L10_Inheritance_Skipiste.crc2.fillRect(225, 475, 100, 60);
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.fillStyle = "black";
            L10_Inheritance_Skipiste.crc2.font = "10px sans-serif";
            L10_Inheritance_Skipiste.crc2.fillText("KASSE SKI LIFT", 230, 485);
            //Dach
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(200, 450);
            L10_Inheritance_Skipiste.crc2.lineTo(275, 400);
            L10_Inheritance_Skipiste.crc2.lineTo(350, 450);
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.lineWidth = 15;
            L10_Inheritance_Skipiste.crc2.lineCap = "round";
            L10_Inheritance_Skipiste.crc2.strokeStyle = "#d3e6e6";
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.save();
            L10_Inheritance_Skipiste.crc2.restore();
            //Eiszapfen groß
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(205, 456);
            L10_Inheritance_Skipiste.crc2.lineTo(210, 525);
            L10_Inheritance_Skipiste.crc2.lineTo(215, 456);
            L10_Inheritance_Skipiste.crc2.lineWidth = 2;
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            //Eiszapfen klein
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(220, 456);
            L10_Inheritance_Skipiste.crc2.lineTo(222, 500);
            L10_Inheritance_Skipiste.crc2.lineTo(225, 456);
            L10_Inheritance_Skipiste.crc2.lineWidth = 2;
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            //Eiszapfen klein rechts
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.moveTo(330, 456);
            L10_Inheritance_Skipiste.crc2.lineTo(333, 500);
            L10_Inheritance_Skipiste.crc2.lineTo(336, 456);
            L10_Inheritance_Skipiste.crc2.lineWidth = 2;
            L10_Inheritance_Skipiste.crc2.stroke();
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            //Schneehaufen an der Hütte
            L10_Inheritance_Skipiste.crc2.beginPath();
            L10_Inheritance_Skipiste.crc2.arc(355, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(325, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(300, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(290, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(275, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(255, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(235, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(217, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.arc(200, 600, 15, 0, 2 * Math.PI);
            L10_Inheritance_Skipiste.crc2.closePath();
            L10_Inheritance_Skipiste.crc2.fillStyle = "white";
            L10_Inheritance_Skipiste.crc2.fill();
            L10_Inheritance_Skipiste.crc2.restore();
        }
    }
    L10_Inheritance_Skipiste.drawCanvas = drawCanvas;
})(L10_Inheritance_Skipiste || (L10_Inheritance_Skipiste = {}));
//# sourceMappingURL=Background.js.map