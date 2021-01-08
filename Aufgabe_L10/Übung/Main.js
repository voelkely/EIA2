"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    window.addEventListener("load", handleLoad);
    L10_Asteroids.lineWidth = 2;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Asteroids.crc2 = canvas.getContext("2d");
        L10_Asteroids.crc2.fillStyle = "black";
        L10_Asteroids.crc2.strokeStyle = "white";
        L10_Asteroids.crc2.fillRect(0, 0, L10_Asteroids.crc2.canvas.width, L10_Asteroids.crc2.canvas.height);
        L10_Asteroids.crc2.lineWidth = L10_Asteroids.lineWidth;
        L10_Asteroids.createPaths();
        //console.log("Asteroid paths: ", asteroidPaths);
        createAsteroids(5); //5 ist die Anzahl der Asteroiden
        //createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20); //Hier kann ich den _timeslices steuern
    }
    function shootProjectile(_event) {
        console.log("shoot Projectile");
        let origin = new L10_Asteroids.Vector(_event.clientX - L10_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Asteroids.crc2.canvas.offsetTop);
        let velocity = new L10_Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        let projectile = new L10_Asteroids.Projectiles(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        //console.log("shoot Laser");
        let hotspot = new L10_Asteroids.Vector(_event.clientX - L10_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hostpot) {
        for (let moveable of moveables) {
            if (moveable instanceof L10_Asteroids.Asteroid && moveable.isHit(_hostpot)) //instanz von....
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L10_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        //console.log("create Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L10_Asteroids.Asteroid(1.0); //in der Klammer befindet sich die Größe des Asteroiden
            moveables.push(asteroid);
        }
    }
    function update() {
        //console.log("update");
        L10_Asteroids.crc2.fillRect(0, 0, L10_Asteroids.crc2.canvas.width, L10_Asteroids.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50); //20 milisekunden sind 1/50 --> 50 mal pro sekunde wird das aufgerufen
            moveable.draw();
        }
        deleteExpendables();
        console.log("Moveable lenght: ", moveables.length);
    }
    //delete expendables moveables
    function deleteExpendables() {
        for (let i = moveables.length - 1; i >= 0; i--) { //vom letzen element nach vorne
            if (moveables[i].expendable) //möchtest du gelöscht werden? Wenn ja dann...
                moveables.splice(i, 1); //an der stelle i und ein element wird gelöscht
        }
    }
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Main.js.map