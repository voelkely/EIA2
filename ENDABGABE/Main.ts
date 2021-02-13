namespace Firework {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
   // let imgData: ImageData;
    let form: HTMLFormElement;
    
   // let moveable: Moveable[] = []; 
    let particleArray: Moveable[] = [];

   

    async function handleLoad(_event: Event): Promise<void> {

        console.log("starting Firework");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCanvas();
      //imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds


        canvas.addEventListener("click", createFirework);
      // addBtn.addEventListener.

        //chooseRocket(); //abfrage ob ausgewählte Rakte gefüllt ist oder nicht
    
        window.setInterval(animate, 20);

       // getRocket(); //(async) wir erhalten die Daten wieder
       
        createTest();
        
    } //handleLoad zu   

    /* async function sendRocket(_event: Event): Promise<void> {
        console.log("send Rocket");

        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "http://localhost:5000/";
        //let url: string = "https://mycodingapp97.herokuapp.com";

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("selectRocket"); 

        url = url + "?" + query.toString() + select.value;

        let response: Response = await fetch(url);
        let reply: string = await response.text();
    
        alert(reply); */

    // sendRocket zu


    /* async function getRocket(): Promise<void> {
        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
       */
        

    // Funktion Create Firework

    function createFirework(_event: MouseEvent): void {
        console.log("create Firework");

        let mousePosX: number = _event.offsetX;
        let mousePosY: number = _event.offsetY;

        for (let i: number = 0; i < 1; i++) {
        let particles: Moveable = new Moveable("blue", 3,  mousePosX, mousePosY);
        particleArray.push(particles);

        for (let firework of particleArray) {
            firework.draw();
        }


       }


        }  

     //createFirework zu


    function animate(): void {
        console.log("animation");
       // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
      //  for (let firework of particleArray) {
          // firework.draw();
      // }


    }

    function createTest(): void {
        console.log("test funktion");
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(500, 400);
        crc2.lineWidth = 500;
        crc2.fillStyle = "white";
        crc2.stroke();
        crc2.restore();
    }






} //namespace zu

