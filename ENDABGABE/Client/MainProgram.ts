namespace Endabgabe_Feuerwerk {

    window.addEventListener("load", handleLoad);

    interface DataCollection {

        nameFirework: string;
        shape: string;
        lifetime: number;
        Color: string;
        amount: number;
    }

    //let url: string = "http://localhost:5001";
    let url: string = "https://mycodingapp97.herokuapp.com";

    export let crc2: CanvasRenderingContext2D;

    let selector: HTMLSelectElement;

    let moveables: Moveable[] = [];
    let rocketInUse: DataCollection | null; // eine globale variable die sich auf das Interface bezieht und deren daten enthält 


    //STARTING WITH FUNCTIONS:

    function handleLoad(_event: Event): void {

        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add");
        addBtn.addEventListener("click", sendRocketData);

        let loadBtn: HTMLSelectElement = <HTMLSelectElement>document.querySelector("Button#load");
        loadBtn.addEventListener("click", getRocketData);   

        let soundBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#BtnSound");
        soundBtn.addEventListener("click", playAudio);

        let pauseBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#BtnPause");
        pauseBtn.addEventListener("click", pauseAudio);
      

        //Canvas:

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "rgba (0, 0, 0, 0.05)";
        crc2.fillRect(0, 0 , crc2.canvas.width, crc2.canvas.height);

        canvas.addEventListener("click", createFirework);
   
        window.setInterval(update, 10);

        
    }//handleLoad zu

    async function sendRocketData(_event: MouseEvent): Promise<void> {

        console.log("Rocket send to Server");
        let formData: FormData = new FormData(document.forms[0]); 
        let query: URLSearchParams = new URLSearchParams(<any>formData);
      
        let response: Response = await fetch(url  + "/send" + "?" + query.toString()); 
        let responseReply: string = await response.text();
        console.log(responseReply); //IM CONSOLE LEER

        alert("Your Rocket is successfully sent to a space Server!");

    }//sendRocketData zu

    async function getRocketData(): Promise <void> {

        console.log("find my Rockets");
        let response: Response = await fetch(url + "/retrieve"); 
        let responseText: string = await response.text();
       
        let rocketArray: string[] = JSON.parse(responseText); //Array mit Daten

        console.log(responseText);
        console.log(JSON.parse(responseText));
        //console.log((rocketArray[3] as unknown as DataCollection).nameFirework);

        createSelect(rocketArray);
    

        
    }//getRocketData zu

    function createSelect(_allRockets: string[]): void {
        console.log("load my RocketData");

        let select: HTMLSelectElement = document.createElement("select"); //dynmaisch "select" erstellen
        let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#selectRocket");    

        fieldset.appendChild(select);

        for (let i: number = 0; i < _allRockets.length; i ++) {
            let currentRocket: DataCollection = _allRockets[i] as unknown as DataCollection;

            /* let rocketname: string = currentRocket.nameFirework;
            let color: string  = currentRocket.Color;
            let lifetime: number  = currentRocket.lifetime;
            let shape: string = currentRocket.shape;
            let amount: number = currentRocket.amount; 
            
            //radius anstelle von amount dynamisch übergebbar
             */

            let optionName: HTMLOptionElement = document.createElement("option");
            optionName.text = currentRocket.nameFirework;
            optionName.value = currentRocket.nameFirework;

            select.appendChild(optionName);

            
            //rocketInUse = currentRocket;
           //console.log(rocketInUse);

            select.addEventListener("change", () => {rocketInUse = currentRocket; });     

        }
     
    }//createSelect zu

    function createFirework(_event: MouseEvent): void {
        console.log("creating firework");

        let mousePosX: number = _event.offsetX;
        let mousePosY: number = _event.offsetY;
  
        console.log(mousePosY);
        let amount: number = 40;
        let radius: number = (Math.PI * 2) / amount;

        debugger;
        console.log(rocketInUse?.amount);


        for (let i: number = 0; i < amount; i++) {
            if (rocketInUse == null) {                                 
                return;
        }

            let firework: Moveable;
            switch (rocketInUse.shape) {
                case "star":
                    firework = new StarParticle(rocketInUse.Color, 15, mousePosX, mousePosY, i, radius, rocketInUse.shape);
                    moveables.push(firework);
                    break;
                case "circle":
                    firework = new CircleParticle(rocketInUse.Color, 15, mousePosX, mousePosY, i, radius, rocketInUse.shape);
                    moveables.push(firework);
                   // console.log(moveables);
                    break;     
                default:
                    break;
           
            } 

            fireworkSound();

            
        } 
/* 
        for (let i: number = 0; i < amount; i++) {
            let particles: Moveable = new StarParticle("yellow", 15, mousePosX, mousePosY, i, radius, "star");
            moveables.push(particles);
         } */
     

    } //createFirework zu

    function update(): void {
     
       // debugger;
        crc2.fillStyle = "rgba(0, 0, 0, 0.06)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
 
        for (let firework of moveables) {
            firework.move(1 / 5);
            firework.draw();           
         
        }  

        deleteExpandables();

    }// update zu
    

    function deleteExpandables(): void {
     
       for (let i: number = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);

        } 

    }// deleteExpandable zu


    function playAudio(): void { 
        let sound: HTMLAudioElement = <HTMLAudioElement>document.getElementById("myAudio");
        sound.play();      

    }//playAudio zu

    function pauseAudio(): void { 
        let sound: HTMLAudioElement = <HTMLAudioElement>document.getElementById("myAudio");
        sound.pause();

    }//pauseAudio zu

    function fireworkSound(): void {
        let sound: HTMLAudioElement = <HTMLAudioElement>document.getElementById("boom");
        sound.play();
 
    } //fireworkSound zu
 
  
    
}//namespace zu