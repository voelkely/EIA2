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
        drawHouse({ x: 50, y: 410 });
        //drawLift();
        //drawPeople();
        drawPipe({ x: 50, y: 300 }, { x: 100, y: 60 }, "#FFFAFA"); // Hier stehen die Vectoren für _PipeStart und _PipeEnd
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
    function drawTrees(_nTrees, _position, _size) {
        console.log("Trees");
        //let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        //gradient.addColorStop(0, "white");
        // gradient.addColorStop(0.5, "green");
        // gradient.addColorStop(1, "darkgreen");
        //crc2.fillStyle = gradient;
        //crc2.fill();
        //crc2.beginPath();
        //crc2.moveTo(0, 0);
        //crc2.lineTo(0, 0.6);
    }
    function drawPipe(_pipeStart, _pipeEnd, _colorPipe) {
        console.log("Pipe", _pipeStart, _pipeEnd);
        crc2.save();
        crc2.translate(60, 320); //Position der Piste 1
        //let controlX1: number = 950;
        //let controlY1: number = 100;
        //let controlX2: number = -10;
        //let controlY2: number = 90;
        crc2.lineWidth = 1; //Dicke der Piste
        crc2.beginPath();
        crc2.moveTo(_pipeStart.x, _pipeStart.y);
        //crc2.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, _pipeEnd.x, _pipeEnd.y);
        // crc2.stroke();
        // crc2.closePath();
        //Position der Piste 2
        //let controlX3: number = 1000;
        ///let controlY3: number = 170;
        //let controlX4: number = -10;
        //let controlY4: number = 100;
        crc2.lineTo(_pipeEnd.x + 300, _pipeEnd.y);
        //crc2.bezierCurveTo(controlX3, controlY3, controlX4, controlY4, _pipeStart.x + 300, _pipeStart.y);
        crc2.stroke();
        let gradient = crc2.createLinearGradient(50, 300, 400, 50); // Was muss ich hier eingeben, damit sich die Kurve einfärbt?
        gradient.addColorStop(0, _colorPipe);
        crc2.fillStyle = gradient;
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.restore();
    }
    function drawHouse(_position) {
        console.log("house");
        crc2.beginPath();
        crc2.rect(50, 410, 150, 180); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
        crc2.stroke();
        let gradient = crc2.createLinearGradient(0, 50, 0, 390);
        crc2.fillStyle = gradient;
        crc2.fillStyle = "#5c4411";
        crc2.fill();
    }
})(L08_Canvas_skipiste || (L08_Canvas_skipiste = {}));
//# sourceMappingURL=skipiste.js.map