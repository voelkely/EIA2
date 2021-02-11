/* Endabgabe EIA 2 / Yvonne N. Voelkel / MKB 262629 */

/* namespace Firework {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

   // let server: herokuapp.. lokalhost
    let lifetime: number;
    let amount: number;
    let color: string;
    let size: string;
    let shape: string;
    let nameRocket: string;

    let moveables: Moveable [] = [];


    function handleLoad(_event: Event): void {
    
        let imgData: ImageData;

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCanvas();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines schwarzen Hintergrunds 

        canvas.addEventListener("mouseup", createFirework);

        let addBnt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add");
        addBnt.addEventListener("click", sendData); 

        window.setInterval(animate, 20);

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#generator");

        chooseRocket(nameRocket, amount, color, shape, lifetime, size);
        animate();
        //generateContent();
        


    } //handleLoad zu

    function sendData(_event: Event): void { //(asynchron) dazu kommt noch getData

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#generator");
        console.log(form, "data send");
       
    } //sendDataToServer zu

    function chooseRocket(_nameRocket: string, _amount: number, _color: string, _shape: string, _lifetime: number, _size: string ): void {
        console.log("rocket chosen");

    } //chooseRocket zu

    
    function animate(): void { 
       // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
       // crc2.putImageData(imgData, 0, 0);
        
    }//animation zu


    function createFirework(_event: MouseEvent): void {

        console.log("create Firework"); //Das feuerwerk wird an target erzeugt und gezeichnet

        let mousePositionX: number = _event.clientX - crc2.canvas.offsetLeft;
        let mousePositionY: number = _event.clientY - crc2.canvas.offsetTop;
        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {

            lifetime = Number(formData.get("life"));
            color = String(formData.get("color"));
            amount = Number(formData.get("particles"));
            size = String(formData.get("sizeExpl"));
            switch (entry[0]) {
                case "circle":
                    shape = "circle";
                    break;
                case "rectangle":
                    shape = "rectangle";
                    break;

            } //switch zu
                           
     
        } //for-Schleife zu

        createParticles(mousePositionX, mousePositionY, amount, color, shape, lifetime, size); //Parameter die an die Funktion übergeben werden sollen
        console.log(shape, "shape is chosen");


    } //createFirework zu

    function createParticles(_amount: number, _mousePositionX: number, _mousePositionY: number, _color: string, _shape: string, _lifetime: number, _size: string ): void { 
        console.log("create Particles");

        let color: string = _color;
        let show: Vector = new Vector(_mousePositionX, _mousePositionY); //position auf canvas


        for (let i: number = 0; i < _amount; i++) {
            let radian: number = (Math.PI * 2) / _amount;
            let px: number = Math.cos(radian * i) * 110 * Math.random() * 2; //(2)power
            let py: number = Math.sin(radian * i) * 110 * Math.random() * 2; //(2)power
            let speed: Vector = new Vector(px, py);
            let particles: Moveable = new Particles(show, speed, color, lifetime, size, shape);  
            moveables.push(particles); 


       
        } 

    } //createParticle zu   

          
   







    


} */

