"use strict";
var L09_Classes_Asteroids;
(function (L09_Classes_Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Classes_Asteroids.crc2 = canvas.getContext("2d");
        L09_Classes_Asteroids.crc2.fillStyle = "black";
        L09_Classes_Asteroids.crc2.strokeStyle = "white";
        L09_Classes_Asteroids.crc2.fillRect(0, 0, L09_Classes_Asteroids.crc2.canvas.width, L09_Classes_Asteroids.crc2.canvas.height);
        L09_Classes_Asteroids.createPaths();
        console.log("Asteroid paths: ", L09_Classes_Asteroids.asteroidPaths);
        createAsteroids(5); //5 ist die Anzahl der Asteroiden
        // createShip();
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20); //Hier kann ich den _timeslices steuern
        function shootLaser(_event) {
            console.log("shoot Laser");
            let hotspot = new L09_Classes_Asteroids.Vector(_event.clientX - L09_Classes_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Classes_Asteroids.crc2.canvas.offsetTop);
            let asteroidHit = getAsteroidHit(hotspot);
            console.log(asteroidHit);
            if (asteroidHit)
                breakAsteroid(asteroidHit);
        }
        function getAsteroidHit(_hostpot) {
            for (let asteroid of asteroids) {
                if (asteroid.isHit(_hostpot))
                    return asteroid;
            }
            return null;
        }
        function breakAsteroid(_asteroid) {
            if (_asteroid.size > 0.3) {
                for (let i = 0; i < 2; i++) {
                    let fragment = new L09_Classes_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                    fragment.velocity.add(_asteroid.velocity);
                    asteroids.push(fragment);
                }
            }
            let index = asteroids.indexOf(_asteroid); // zum löschen des asteroiden = methode "indexOf" --> nimm Asteroiden und schau an welcher Stelle er im Array ist
            asteroids.splice(index, 1); //lösche ein element raus und schiebe das Array wieder zusammen --> aus dem Index und 1 element soll gelöscht werde           
        }
        function createAsteroids(_nAsteroids) {
            console.log("create Asteroids");
            for (let i = 0; i < _nAsteroids; i++) {
                let asteroid = new L09_Classes_Asteroids.Asteroid(1.0); //in der Klammer befindet sich die Größe des Asteroiden
                asteroids.push(asteroid);
            }
        }
        function update() {
            console.log("update");
            L09_Classes_Asteroids.crc2.fillRect(0, 0, L09_Classes_Asteroids.crc2.canvas.width, L09_Classes_Asteroids.crc2.canvas.height);
            for (let asteroid of asteroids) {
                asteroid.move(1 / 50); //20 milisekunden sind 1/50 --> 50 mal pro sekunde wird das aufgerufen
                asteroid.draw();
            }
        }
    }
})(L09_Classes_Asteroids || (L09_Classes_Asteroids = {}));
//# sourceMappingURL=Main.js.map