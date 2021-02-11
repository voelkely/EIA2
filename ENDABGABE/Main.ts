namespace Firework {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
   // let url: string =
    
    let fireworks: Rocket[] = [];
    let oneParticle: Particles[] = [];

    //Function handleLoad

    function handleLoad(_event: Event): void {

        console.log("starting Firework");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCanvas();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds

        canvas.addEventListener("click", createFirework);

        //chooseRocket();
        createParticle();
        startFirework();

        
    } //handleLoad zu   

    // Funktion Create Firework

    function createFirework(_event: MouseEvent): void {
        console.log("create Firework");
        for (let i: number = 0; i < 1; i++) {
            let firework: Rocket = new Rocket(5, "blue"); //5 ist der Radius
            fireworks.push(firework);

        }  

    } //createFirework zu

    //Funktion createParticle

    function createParticle(): void { //Hier wird ein partikel erstellt deshalb oneParticle aus dem Array vom Tpy Particle
        for (let i: number = 0; i < 400; i++) {
            let oneParticle: Particle = new Particle();
            oneParticle.push(fireworks);
        }
        
    } //createParticle zu

    function startFirework(_event: MouseEvent): void { //hier wird das feuerwerk gestartet
        
        let mousePosition: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let speed: Vector = new Vector (100, 200);
        let particle: Particle = new Particle(mousePosition, speed);
        fireworks.push(particle);

        console.log(particle);
    }






} //namespace zu

