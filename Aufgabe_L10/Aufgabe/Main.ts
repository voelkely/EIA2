namespace L10_Inheritance_Skipiste {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;


    let schneeflocken: Moveable[] = []; //wenn ich mehrere brauche 
    let skifahrer: Moveable[] = [];
    let moveables: Moveable[] = [];


    let lift: Lift;

    let baum: Tree = new Tree();
    let haus: House = new House();

    function handleLoad(_event: Event): void {
        console.log("starting Animation");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCanvas();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds 

        createSnowflakes(5000); //Anzahl der Schneeflocken in meinem Canvas
        createSkier(4);
        createLift();
        animate();      
    }

    //Schneeflocken
    function createSnowflakes(_nFlocken: number): void { 
        for (let i: number = 0; i < _nFlocken; i++) {
            let flocke: Moveable = new Snowflake();  //Eine flocke soll erstellt werden
            flocke.x = Math.random() * window.innerWidth; 
            flocke.y = Math.random() * window.innerHeight;
            flocke.speed2 = (Math.random() + 1) * 0.1; //Geschwindigkeit des fallens der Flocken
            schneeflocken.push(flocke); 
        }           
    }

    //Skifahrer
    function createSkier(_nSkier: number): void {
        let y: number = 200;
        for (let i: number = 0; i < _nSkier; i++) {
            let oneSkier: Moveable = new Skier(y);
            y += 50;
            skifahrer.push(oneSkier);
            }
        }

    //Lift 
    function createLift(): void {
        lift = new Lift();
        console.log("create Lift");
        console.log(lift.position);

    }

    //animation
    function animate(): void { 
        window.setTimeout(animate, 10);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        
        moveObjects();
        drawObjects();

    }//animation zu


    function moveObjects(): void { 

        //Schneeflocken
        for (let i: number = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].move(1);
        }

        //Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            skifahrer[i].move(1 / 80);
            
        } 
        
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        moveUp();

    }//moveObject zu

    function moveUp(): void {
       // lift.position.x += 1;
        lift.moveUp(1 / 70);
    }


    function drawObjects(): void { 
           
        // Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            skifahrer[i].draw();
        }
        //Tree
        baum.draw();

        //Haus
        haus.draw();

        // Lift
        lift.draw();

        //Schneeflocken
        for (let i: number = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].draw();
        }


    }//drawObject zu

} //namespace zu
  

