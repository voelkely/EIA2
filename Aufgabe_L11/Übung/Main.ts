namespace L11_Asteroids {
    export enum ASTEROID_EVENT {
        UFO_SHOOTS = "ufoShoots",
        ASTEROID_HIT = "asteroidHit"
    }
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

    function shootProjectile(_origin: Vector): void {
        console.log("shoot Projectile");
        let velocity: Vector = Vector.getRandom(100, 100);
        let projectile: Projectiles = new Projectiles(_origin, velocity);
        projectile.move(0.15);
        moveables.push(projectile);

    }

    function handleUfoShot(_event: CustomEvent): void {
        let ufo: Ufo = (<CustomEvent>_event).detail.ufo;
        shootProjectile(ufo.position);
    }

    function createUfo(): void {
        console.log("create Ufo");
        let ufo: Ufo = new Ufo();
        moveables.push(ufo);
    }

    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let hotspot: Hotspot = new Hotspot(position);
        moveables.push(hotspot);
    }

    function breakAsteroid(_event: Event): void {
        let asteroid: Asteroid = (<CustomEvent>_event).detail.asteroid;
        if (asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Asteroid = new Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("Create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            moveables.push(asteroid);
        }
    }

    function update(): void {
        // console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

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


    function deleteExpandables(): void {
        for (let i: number = moveables.length - 1; i >= 0; i--) { //vom letzen element nach vorne
            if (moveables[i].expendable)   //möchtest du gelöscht werden? Wenn ja dann...
                moveables.splice(i, 1); //an der stelle i und ein element wird gelöscht
        }  
    }
  
    function handleCollisions(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            let a: Moveable = moveables[i];
            for (let j: number = i + 1; j < moveables.length; j++) {
                let b: Moveable = moveables[j];

                if (a instanceof Asteroid && b instanceof Asteroid)
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
            

        


}