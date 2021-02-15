namespace Endabgabe_Feuerwerk {

    window.addEventListener("load", handleLoad);

    interface RocketCollection {
        name: string;
        shape: string;
        lifetime: number;
        color: string;
        amount: number;
    }

    //let url: string = "http://localhost:5001";
    let url: string = "https://mycodingapp97.herokuapp.com";

    export let crc2: CanvasRenderingContext2D;

    let selector: HTMLSelectElement;

    let moveables: Moveable[] = [];
    let loadRocket: RocketCollection[] = [];  //bezihet sich auf mein Interface


    //STARTING WITH FUNCTIONS:

    function handleLoad(_event: Event): void {

        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add");
        addBtn.addEventListener("click", sendRocketData);


        /* let soundBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#BtnSound");
        soundBtn.addEventListener("click", playAudio);

        let pauseBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#BtnPause");
        pauseBtn.addEventListener("click", pauseAudio);
 */

        let clickOnSelect: HTMLSelectElement = <HTMLSelectElement>document.querySelector("form#collection");
        clickOnSelect.addEventListener("change", chooseRocket);

        let loadBtn: HTMLSelectElement = <HTMLSelectElement>document.querySelector("Button#load");
        loadBtn.addEventListener("click", chooseRocket);
      
        getRocketData();


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
        let formData: FormData = new FormData(document.forms[0]); //nimmt infos aus der Form "generator"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
      
        let response: Response = await fetch(url + "?" + "/send" + query.toString()); 
        let responseReply: string = await response.text();
        console.log(responseReply); //IM CONSOLE LEER

        alert("Your Rocket is successfully sent to a space Server!");

    }//sendRocketData zu

    async function getRocketData(): Promise <void> {

        console.log("find my Rockets");
        let response: Response = await fetch(url + "?/retrieve"); 
        let responseText: string = await response.text();

        console.log(responseText); //IN DER CONOSLE LEER, IN HEROKU (App) STEHT AUCH NICHTS MEHR

    }//getRocketData zu






    function chooseRocket(): void {
        console.log("is picked rocket filled?");

        //HIER MÜSSEN NOCH DIE DATEN AUS DER DATENBANK ABGEFRAGT WERDEN!!! ABER WIE???

        /* let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {

            let rocketname: string = String(formData.get("nameRocket"));
            let lifetime: number = Number(formData.get("lifetime"));
            let color: string = String(formData.get("color"));
            let amountParticles: number = Number(formData.get("particles"));
            let shape: string = String(formData.get("shapePart"));
            switch (entry[1]) {
                case "circle":
                  shape = "circle";
                  break;
                case "star":
                  shape = "star";
                  break;
            }

       } */

        let formDataCollection: FormData = new FormData(document.forms[0]);
        let rocketcreated: Boolean = true; //Wurde die richtige Rakete ausgewählt?

        for (let entry of formDataCollection) {
            selector = <HTMLSelectElement>document.querySelector("[value='" +  entry[0] + entry[1] + "']");
        
          //  console.log(entry[0], "hier ist das entry0"); //Entry0 sind name, lifetime, particles??
         //   console.log(entry [1], "hier ist das entry1"); //Entry 1 sind color, shape, sekundenzahl und der amount??

            if (entry[0] == "Stardust" || entry[0] == "Space Buddy" || entry[0] == "Galaxy Shooter" || entry[0] == "Firecracker" || entry[0] == "Space Fighter") {
                rocketcreated = true;

            } else {
                rocketcreated = false;
                
            }
            
        }
        if (rocketcreated != true) {
            alert("This Rocket ist empty. Please try another one");
        }
        
    
    } //chooseRocket zu

    function createFirework(_event: MouseEvent): void {
        console.log("creating firework");

        let mousePosX: number = _event.offsetX;
        let mousePosY: number = _event.offsetY;
        
        let amount: number = 20; //sollte eigentlich durch User definiert werden
        let radius: number = (Math.PI * 2) / amount;

        for (let i: number = 0; i < amount; i++) {
        let particle: Moveable = new CircleParticle("orange", 15, mousePosX, mousePosY, i, radius, "circle"); //color, speed, position, i, radius, shape
        moveables.push(particle);
        }

      //  fireworkSound();

        /* for (let i: number = 0; i < amount; i++) {
            let particles: Moveable = new StarParticle("yellow", 15, mousePosX, mousePosY, i, radius, "star");
            moveables.push(particles);
            } */
       
    } //createFirework zu

    function update(): void {
     
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


   /*  function playAudio(): void { 
        let sound: HTMLAudioElement = <HTMLAudioElement>document.getElementById("myAudio"); //WAS KÖNNTE DA REIN? ALSO ES FUNKTIONIERT AUCH SO
        sound.play(); 

    }//playAudio zu

    function pauseAudio(): void { 
        let sound: HTMLAudioElement = <HTMLAudioElement>document.getElementById("myAudio");
        sound.pause();

    }//pauseAudio zu

    function fireworkSound(): void {
        let sound: HTMLAudioElement = <HTMLAudioElement>document.getElementById("boom");
        sound.play();
 */
    //} *///fireworkSound zu
 
  
    
}//namespace zu