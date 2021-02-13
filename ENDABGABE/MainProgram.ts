namespace Endabgabe_Feuerwerk {

    window.addEventListener("load", handleLoad);

    //let url: string = "http://localhost:5001";
    let url: string = "https://mycodingapp97.herokuapp.com";

    export let crc2: CanvasRenderingContext2D;

    let rockets: Rocket[] = [];
    let moveables: Moveable[] = [];

    let _event: PointerEvent;

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
        createRocketParticle(5);

        window.setInterval(update, 20);

        
    }//handleLoad zu

    async function sendRocketData(_event: MouseEvent): Promise<void> {

        console.log("Rocket send to Server");
        let formData: FormData = new FormData(document.forms[0]); //nimmt infos aus der Form "generator"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
      
        console.log(url + "/send" + "?" + query.toString());
        let response: Response = await fetch(url + "/send" + "?" + query.toString()); 
        let responseReply: string = await response.text();

        alert("Rocket successfully sent!");


    }//sendRocketData zu

    async function getRocketData(): Promise <void> {

        console.log("find Rockets");
        let response: Response = await fetch(url + "?"); //was kommt da rein? theoretisch die URL der seite. Brauche ja keine Data.json oder?
        let responseText: string = await response.text();
        console.log(responseText);

    }//getRocketData zu

    function chooseRocket(): void {
        console.log("is picked rocket filled?");

        //HIER MÜSSEN NOCH DIE DATEN AUS DER DATENBANK ABGEFRAGT WERDEN!!!

        let formDataCollection: FormData = new FormData(document.forms[0]);
        let rocketcreated: Boolean = true; //Wurde die richtige Rakete ausgewählt?

        for (let entry of formDataCollection) {
            let selector: HTMLSelectElement = <HTMLSelectElement>document.querySelector("[value='" +  entry[1] + "']");
            console.log(selector, "jajaj");
            console.log(entry[0]);

            if (entry[1] == "Stardust" || entry[1] == "Space Buddy" || entry[1] == "Galaxy Shooter" || entry[1] == "Firecracker" || entry[1] == "Space Fighter") {
                createFirework();
               

            } else {
                rocketcreated = false;
                
            }
            
        }
        if (rocketcreated != true) {
            alert("This Rocket ist empty. Please try another one");
        }
        
    
    } //chooseRocket zu

    function createFirework(): void {
        console.log("creating firework");

       // let mousePosition: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);

        let mousePosX: number = _event.offsetX;
        let mousePosY: number = _event.offsetY; 

        for (let i: number = 0; i < 1; i++) {
        let particles: Moveable = new Moveable("blue", 3,  mousePosX, mousePosY);
        moveables.push(particles);

        for (let firework of moveables) {
            firework.draw();
        }


       }
       
        

    } //createFirework zu



    function update(): void {
      //  console.log("update");
        crc2.fillStyle = "rgba(0, 0, 0, 0.05)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let rocketParticle of rockets) {
            rocketParticle.move(1 / 10);
            rocketParticle.draw();
        }

        deleteExpandables();

    }// update zu

    function deleteExpandables(): void {
        console.log("delete");

    } // deleteExpandable zu


  
  
  
  
  
    function drawBackground(): void {
        console.log("background drawn");
        crc2.fillStyle = "rgba (0, 0, 0, 0.05)";
        crc2.fillRect(0, 0 , crc2.canvas.width, crc2.canvas.height);

    } //drawBackground zu

  
  
  
  
  
    function createRocketParticle(_nParticles: number): void {
        console.log("create RocketParticle");
        for (let i: number = 0; i < _nParticles; i++) {
            let rocketParticle: Rocket = new Rocket(1.0);
            rockets.push(rocketParticle);

        }
    }

  
 








}//namespace zu