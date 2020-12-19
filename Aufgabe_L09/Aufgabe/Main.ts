namespace L09_Classes_Skipiste {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;


    let schneeflocken: Snowflake[] = []; //wenn ich mehrere brauche 
    let skifahrer: Skier[] = [];


    let lift: Lift = new Lift();
    let baum: Tree = new Tree();
    let haus: House = new House();

   // let up: boolean = true; 
   // let down: boolean = true;

    function handleLoad(_event: Event): void {
        console.log("starting Animation");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCanvas();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds 

        createSnowflakes(1000); //Anzahl der Schneeflocken in meinem Canvas
        createSkier(4);
        createLift();
        animate();
        moveLift();
        moveUp();
        moveDown();
        


    //Schneeflocken
        function createSnowflakes(_nFlocken: number): void { 
        for (let i: number = 0; i < _nFlocken; i++) {
            let flocke: Snowflake = new Snowflake();  //Eine flocke soll erstellt werden
            flocke.x = Math.random() * window.innerWidth; 
            flocke.y = Math.random() * window.innerHeight;
            flocke.speed = (Math.random() + 1) * 0.1; //Geschwindigkeit des fallens der Flocken
            schneeflocken.push(flocke); // das array schneeflocken greift auf die einzelen Flocke zu und pusht diese
        }           
        }

    //Skifahrer
        function createSkier(_nSkier: number): void {
        let y: number = 200;
        for (let i: number = 0; i < _nSkier; i++) {
            let oneSkier: Skier = new Skier(1, y);
            y += 50;
            skifahrer.push(oneSkier);
            }
        }

    //Lift 
        function createLift(): void {
        console.log("create Lift");

        lift.x = 500;
        lift.y = -125;
        }

    }//handleLoad zu


    //animation
    function animate(): void { 
        window.setTimeout(animate, 20);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        
        moveObjects();
        drawObjects();

    }//animation zu


    function moveObjects(): void { 

        //Schneeflocken
        for (let i: number = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].move();
        }

        //Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            skifahrer[i].move(1 / 60);
            
        }   

    }//moveObject zu

    function moveLift(): void {
        console.log("move the lift");
    }

    function moveUp(): void {
        lift.moveUp(1 / 50);
    }

    function moveDown(): void {
       // lift.moveDown();
    }



    function drawObjects(): void { 

        //Schneeflocken
        for (let i: number = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].draw();
    
        }
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


    }//drawObject zu




} //namespace zu
  

