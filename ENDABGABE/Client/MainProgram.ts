namespace Endabgabe_Feuerwerk {

    window.addEventListener("load", handleLoad);

    //let url: string = "http://localhost:5001";
    let url: string = "https://mycodingapp97.herokuapp.com";

    export let crc2: CanvasRenderingContext2D;

    let selector: HTMLSelectElement;

   // let rockets: Rockets[] = []; //
    let particles: Moveable [] = [];
    let moveables: Moveable[] = [];
    

    function handleLoad(_event: Event): void {

        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add");
        addBtn.addEventListener("click", sendRocketData);

        let clickOnSelect: HTMLSelectElement = <HTMLSelectElement>document.querySelector("form#collection");
        clickOnSelect.addEventListener("change", chooseRocket);
      
        getRocketData();


        //Canvas:

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", createFirework);
   
        drawBackground();

        window.setInterval(update, 20);

        
    }//handleLoad zu

    async function sendRocketData(_event: MouseEvent): Promise<void> {

        console.log("Rocket send to Server");
        let formData: FormData = new FormData(document.forms[0]); //nimmt infos aus der Form "generator"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
      
        console.log(url + "/send" + "?" + query.toString());
        let response: Response = await fetch(url + "/send" + "?" + query.toString()); 
        let responseReply: string = await response.text();
        console.log(responseReply);

        alert("Rocket successfully sent to a space Server!");


    }//sendRocketData zu

    async function getRocketData(): Promise <void> {

        console.log("find Rockets");
        let response: Response = await fetch(url + "?"); 
        let responseText: string = await response.text();
        console.log(responseText); //IN DER CONOSLE LEER, IN HEROKU (App) STEHT AUCH NICHTS MEHR

    }//getRocketData zu

    function chooseRocket(): void {
        console.log("is picked rocket filled?");

        //HIER MÜSSEN NOCH DIE DATEN AUS DER DATENBANK ABGEFRAGT WERDEN!!! ABER WIE???

        //let formData: FormData = new FormData(document.forms[0]);

        /* for (let entry of formData) {

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
                case "triangle":
                  shape = "triangle";
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
                createFirework(); //WARUM ROT? WAS SOLL DA REIN?
               

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
        
        let amount: number = 200; //sollte eigentlich durch User definiert werden
        let offset: number = (Math.PI * 2) / amount;

        for (let i: number = 0; i < amount; i++) {
        let particle: Rockets = new CircleParticle("green", 2, mousePosX, mousePosY, i, offset);
        moveables.push(particle);
        }
       
    } //createFirework zu

    function update(): void {
      //  console.log("update");
        crc2.fillStyle = "rgba(0, 0, 0, 0.07)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //drawRockets();

        for (let firework of moveables) {
            firework.move(1 / 10);
            firework.draw();
         
        }  

        deleteExpandables();

    }// update zu

    function deleteExpandables(): void {
       // console.log("delete");
       for (let i: number = moveables.length - 1; i >= 0; i--) {
        if (moveables[i].expendable)
            moveables.splice(i, 1);

        } 

    }// deleteExpandable zu
 
  
    function drawBackground(): void {
        console.log("background drawn");
        crc2.fillStyle = "rgba (0, 0, 0, 0.05)";
        crc2.fillRect(0, 0 , crc2.canvas.width, crc2.canvas.height);

    } //drawBackground zu

  
  
}//namespace zu