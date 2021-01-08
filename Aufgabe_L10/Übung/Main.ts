namespace L10_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    export let lineWidth: number = 2;
    let moveables: Moveable[] = [];
    
    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0 , crc2.canvas.width, crc2.canvas.height);
        crc2.lineWidth = lineWidth;

        createPaths();
        //console.log("Asteroid paths: ", asteroidPaths);

        createAsteroids(5); //5 ist die Anzahl der Asteroiden

        //createShip();

        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20); //Hier kann ich den _timeslices steuern
    }

    function shootProjectile(_event: MouseEvent): void {
        console.log("shoot Projectile");
        let origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let velocity: Vector = new Vector(0, 0);
        velocity.random(100, 100);
        let projectile: Projectiles = new Projectiles(origin, velocity);
        moveables.push(projectile);

    }

    
    function shootLaser(_event: MouseEvent): void {
            //console.log("shoot Laser");
            let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
            console.log(asteroidHit);
            if (asteroidHit) 
               breakAsteroid(asteroidHit);
    }

    function getAsteroidHit(_hostpot: Vector): Asteroid | null  {
            for (let moveable of moveables) {
                if (moveable instanceof Asteroid && moveable.isHit(_hostpot)) //instanz von....
                return moveable;
            }
            return null;

        }

    function breakAsteroid(_asteroid: Asteroid): void {
            if (_asteroid.size > 0.3) {
                for (let i: number = 0; i < 2; i++) {
                    let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                    fragment.velocity.add(_asteroid.velocity);
                    moveables.push(fragment);                    
                }               
            }
            _asteroid.expendable = true;
    }

    function createAsteroids(_nAsteroids: number): void {
            //console.log("create Asteroids");
            for (let i: number = 0; i < _nAsteroids; i++) {
                let asteroid: Asteroid = new Asteroid(1.0);   //in der Klammer befindet sich die Größe des Asteroiden
                moveables.push(asteroid);
            }     
    }

    function update(): void {
            //console.log("update");
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

            for (let moveable of moveables) {
                moveable.move(1 / 50); //20 milisekunden sind 1/50 --> 50 mal pro sekunde wird das aufgerufen
                moveable.draw();
            }

            deleteExpendables();

            console.log("Moveable lenght: ", moveables.length);

    }
    //delete expendables moveables
    function deleteExpendables(): void {
        for (let i: number = moveables.length - 1; i >= 0; i--) { //vom letzen element nach vorne
            if (moveables[i].expendable)   //möchtest du gelöscht werden? Wenn ja dann...
                moveables.splice(i, 1); //an der stelle i und ein element wird gelöscht
        }  
    }
            

        


}