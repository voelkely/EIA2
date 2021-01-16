"use strict";
var L11_Asteroids;
(function (L11_Asteroids) {
    let ASTEROID_EVENT;
    (function (ASTEROID_EVENT) {
        ASTEROID_EVENT["UFO_SHOOTS"] = "ufoShoots";
        ASTEROID_EVENT["ASTEROID_HIT"] = "asteroidHit";
    })(ASTEROID_EVENT = L11_Asteroids.ASTEROID_EVENT || (L11_Asteroids.ASTEROID_EVENT = {}));
    window.addEventListener("load", handleLoad);
    L11_Asteroids.lineWidth = 2;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Asteroids.crc2 = canvas.getContext("2d");
        L11_Asteroids.crc2.fillStyle = "black";
        L11_Asteroids.crc2.strokeStyle = "white";
        L11_Asteroids.crc2.fillRect(0, 0, L11_Asteroids.crc2.canvas.width, L11_Asteroids.crc2.canvas.height);
        L11_Asteroids.crc2.lineWidth = L11_Asteroids.lineWidth;
        L11_Asteroids.createPaths();
        //console.log("Asteroid paths: ", asteroidPaths);
        createAsteroids(5); //5 ist die Anzahl der Asteroiden
        createUfo();
        createUfo();
        createUfo();
        canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
        canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20); //Hier kann ich den _timeslices steuern
    }
    function shootProjectile(_origin) {
        console.log("shoot Projectile");
        let velocity = L11_Asteroids.Vector.getRandom(100, 100);
        let projectile = new L11_Asteroids.Projectiles(_origin, velocity);
        projectile.move(0.15);
        moveables.push(projectile);
    }
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function createUfo() {
        console.log("create Ufo");
        let ufo = new L11_Asteroids.Ufo();
        moveables.push(ufo);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let position = new L11_Asteroids.Vector(_event.clientX - L11_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L11_Asteroids.crc2.canvas.offsetTop);
        let hotspot = new L11_Asteroids.Hotspot(position);
        moveables.push(hotspot);
    }
    function breakAsteroid(_event) {
        let asteroid = _event.detail.asteroid;
        if (asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L11_Asteroids.Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L11_Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        // console.log("Update");
        L11_Asteroids.crc2.fillRect(0, 0, L11_Asteroids.crc2.canvas.width, L11_Asteroids.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    //delete expendables moveables
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) { //vom letzen element nach vorne
            if (moveables[i].expendable) //möchtest du gelöscht werden? Wenn ja dann...
                moveables.splice(i, 1); //an der stelle i und ein element wird gelöscht
        }
    }
    function handleCollisions() {
        for (let i = 0; i < moveables.length; i++) {
            let a = moveables[i];
            for (let j = i + 1; j < moveables.length; j++) {
                let b = moveables[j];
                if (a instanceof L11_Asteroids.Asteroid && b instanceof L11_Asteroids.Asteroid)
                    continue;
                if (a.expendable || b.expendable)
                    continue;
                if (a.isHitBy(b)) {
                    a.hit();
                    b.hit();
                }
            }
        }
    }
})(L11_Asteroids || (L11_Asteroids = {}));
//# sourceMappingURL=Main.js.map