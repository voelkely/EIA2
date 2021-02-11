"use strict";
/* namespace L09_Classes_Skipiste {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;


    let schneeflocken: Snowflake[] = []; //wenn ich mehrere brauche
    let skifahrer: Skier[] = [];


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
        lift = new Lift(1);
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
            schneeflocken[i].move();
        }

        //Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            skifahrer[i].move(1 / 80);
            
        }

        moveUp();
        moveDown();

    }//moveObject zu

    function moveUp(): void {
       // lift.position.x += 1;
        lift.moveUp(1 / 70);
    }

    function moveDown(): void {
        //lift.position.x -= 1;     //1 ist die geschwindigkeit
      //  if (lift.position.x <= 610) {
            //down = true;
      //  }
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
  

 
//# sourceMappingURL=Main.js.map