namespace L08_Canvas_skipiste {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62; //Goldener Schnitt

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
    
        drawBackground();
        drawSun({x: 100, y: 75});
        drawCloud({x: 500, y: 225 }, {x: 450, y: 150});
        drawMountains({x: 0, y: horizon}, 75, 200, "lightgrey", "white");  //Das steht im AD im Kasten oben
        drawMountains({x: 0, y: horizon}, 50, 100, "#FFFAFA", "lightgrey"); 
        drawBottom({x: crc2.canvas.width, y: horizon}, 800, 800);
        drawHill();
        drawHouse(); 
        drawLift({x: 700, y: 450}); //Hier drinnen steht die Position des Sitzes am Lift
        drawTrees();
        drawPerson({x: 600, y : 350});
        //drawPeople();
        drawSnow();
        
        
    }

    function drawBottom(_position: Vector, _widthBack: number, _widthFront: number): void {
        console.log("Bottom", _position);

        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack, _position.y);
        crc2.lineTo(crc2.canvas.width + _widthFront, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width - _widthFront, crc2.canvas.height);
        crc2.lineTo(_position.x - _widthBack, _position.y);
        crc2.closePath();


        let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#FFFAFA");
        gradient.addColorStop(0.6, "white");

        crc2.fillStyle = gradient;
        crc2.fill();

    }
 
    function drawBackground(): void {
        console.log("background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawHill(): void {

        crc2.beginPath();
        crc2.moveTo(800, 200);
        crc2.stroke();
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();

        crc2.save();

        crc2.fillStyle = "white";
        crc2.fill();

        crc2.restore(); 
    }

    function drawSun(_position: Vector): void {
        console.log("sun", _position);

        let r1: number = 20;
        let r2: number  = 150;

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)"); 

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0,  2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 15;
        let radiusParticle: number = 100;
        let particle: Path2D = new Path2D(); 

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }

        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, - _max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = - _min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);

        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);

        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);

        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();    

    }

    function drawHouse(): void {
        console.log("house");
        
        //Hütte

        crc2.beginPath();
        crc2.rect(450, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
        crc2.stroke();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 50, 0, 390);
        crc2.fillStyle = gradient;

        crc2.fillStyle = "#5c4411";
        crc2.fill();

        crc2. save();

        //Fenster
        
        crc2.fillStyle = "#c8cfcf";
        crc2.fillRect(475, 475 , 100, 60);
        crc2. save();
        
        //Dach

        crc2.beginPath();
        crc2.moveTo(450, 450); //(300, 250)
        crc2.lineTo(525, 400); // (375, 175)
        crc2.lineTo(600, 450); // (450, 240)
        crc2.stroke();
        crc2.closePath();

        crc2.lineWidth = 15;
        crc2.strokeStyle = "#ebfcfc";
        crc2.stroke();

        crc2.fillStyle = "white";
        crc2.fill();

        crc2.save();  
        crc2.restore(); 
    
    }

    function drawTrees(): void {
        console.log("Trees");

        //Großer Baum

        crc2.beginPath();
        crc2.moveTo(575, 600);
        crc2.lineTo(600, 425);
        crc2.lineTo(625, 600);
        crc2.closePath();

        crc2.fillStyle = "green";
        crc2.fill();
        crc2.save();

        crc2.lineWidth = 0;

        // Kleiner Baum

        crc2.beginPath();
        crc2.moveTo(425, 600);
        crc2.lineTo(450, 500);
        crc2.lineTo(475, 600);
        crc2.closePath();

        crc2.fillStyle = "green";
        crc2.fill();

        crc2.save(); 

        crc2.restore();

    }
         
    function drawLift(_position: Vector): void {
        console.log("lift", _position);

        crc2.beginPath();
        crc2.moveTo(600, 500);
        crc2.lineTo(800, 400);
        crc2.lineWidth = 3;
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.save();
        crc2.translate(_position.x, _position.y);
            
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 75);
        crc2.lineTo(50, 50);
        crc2.lineTo(50, 75);
        crc2.lineWidth = 2;
        crc2.strokeStyle = "black";
        
        crc2.stroke();

        crc2.restore();
    }

    function drawPerson(_position: Vector): void {
        console.log("single skier");

        let color: string[] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
        let randomColor: string = color[Math.floor(Math.random() * color.length)];
            
        crc2.save();
       // crc2.translate(_position.x, _position.y);
        //crc2.rotate(20 * Math.PI / 180);
  
        // Head
        crc2.beginPath();
        crc2.arc(629, 325, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#fce6ac";
        crc2.fill();
        // Body  
        crc2.beginPath();
        crc2.ellipse(650, 350, 20, 10, 10, 10, 50);
        crc2.closePath();
        crc2.fillStyle = randomColor;
        crc2.stroke();
        crc2.fill();    
        // Arm1
        crc2.beginPath();
        crc2.rect(620, 345, 25, 5);   
        crc2.closePath();
        crc2.fillStyle = randomColor;
        crc2.fill(); 
         // Arm2
        crc2.beginPath();
        crc2.rect(620, 352, 25, 5);
        crc2.closePath();            
        crc2.fillStyle = randomColor;
        crc2.fill();
        // SkiStock1
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.lineCap = "round";
        crc2.beginPath();
        crc2.moveTo(620, 347);
        crc2.lineTo(640, 380);
        crc2.closePath();
        crc2.stroke();
        // SkiStock
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.lineCap = "round";
        crc2.beginPath();
        crc2.moveTo(620, 347);
        crc2.lineTo(660, 380);
        crc2.closePath();
        crc2.stroke();
        // Leg1
        crc2.strokeStyle = randomColor;
        crc2.lineWidth = 4;
        crc2.lineCap = "round";
        crc2.beginPath();
        crc2.moveTo(650, 340);
        crc2.lineTo(670, 380); //Länge der Beine
        crc2.closePath();
        crc2.stroke();
        // Leg2           
        crc2.beginPath();
        crc2.moveTo(650, 340);
        crc2.lineTo(680, 380); //Länge der Beine
        crc2.closePath();
        crc2.strokeStyle = randomColor;
        crc2.lineWidth = 4;
        crc2.lineCap = "round";
        crc2.stroke();              
        //Ski        
        crc2.beginPath();
        crc2.moveTo(100, 35);
        crc2.lineTo(40, 50); //Länge vom Ski
        crc2.closePath();  
        crc2.lineWidth = 4;
        crc2.lineCap = "round";
        crc2.strokeStyle = "black";
        crc2.stroke();
        //crc2.rect(640, 380, 60, 4);

        crc2.restore();
                
    }

    function drawPeople(): void {
        console.log("viele Skifahrer");

        for (let i: number = 0; i < 10; i++);
        
    }


    function drawSnow(): void {
        for (let i: number = 0; i < 300; i++) {
            let x: number = Math.random() * window.innerWidth;
            let y: number = Math.random() * window.innerHeight;
            let radiusSnowflake: number = Math.random() * 2.5 + 1;
            
            crc2.beginPath();
            crc2.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            crc2.fillStyle = "white";
            crc2.fill();
        }
    }
}
