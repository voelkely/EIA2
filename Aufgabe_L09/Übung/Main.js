"use strict";
/*  namespace L09_Classes_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0 , crc2.canvas.width, crc2.canvas.height);

        createPaths();
        console.log("Asteroid paths: ", asteroidPaths);

        createAsteroids(5); //5 ist die Anzahl der Asteroiden

        // createShip();

        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20); //Hier kann ich den _timeslices steuern

    
        function shootLaser(_event: MouseEvent): void {
            console.log("shoot Laser");
            let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
            console.log(asteroidHit);
            if (asteroidHit)
               breakAsteroid(asteroidHit);
        }

        function getAsteroidHit(_hostpot: Vector): Asteroid | null  {
            for (let asteroid of asteroids) {
                if (asteroid.isHit(_hostpot))
                return asteroid;
            }
            return null;

        }

        function breakAsteroid(_asteroid: Asteroid): void {
            if (_asteroid.size > 0.3) {
                for (let i: number = 0; i < 2; i++) {
                    let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                    fragment.velocity.add(_asteroid.velocity);
                    asteroids.push(fragment);
                }
            }

            let index: number = asteroids.indexOf(_asteroid); // zum löschen des asteroiden = methode "indexOf" --> nimm Asteroiden und schau an welcher Stelle er im Array ist
            asteroids.splice(index, 1); //lösche ein element raus und schiebe das Array wieder zusammen --> aus dem Index und 1 element soll gelöscht werde

        }

        function createAsteroids(_nAsteroids: number): void {
            console.log("create Asteroids");
            for (let i: number = 0; i < _nAsteroids; i++) {
                let asteroid: Asteroid = new Asteroid(1.0);   //in der Klammer befindet sich die Größe des Asteroiden
                asteroids.push(asteroid);
            }
        }

        function update(): void {
            console.log("update");
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

            for (let asteroid of asteroids) {
                asteroid.move(1 / 50); //20 milisekunden sind 1/50 --> 50 mal pro sekunde wird das aufgerufen
                asteroid.draw();
            }
        }

        


} 
//# sourceMappingURL=Main.js.map