namespace L05_Hexenkessel {
    window.addEventListener("load", handleLoad);

    let total: number = 0;

    function handleLoad(_event: Event): void {

    generateContent(data); 

    let addBasics: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_basics");
    let addIngredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_ingredients");
    let addTemperature: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_temperature");
    let addStiring: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_stiring");
    let sendSnape: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#sendPotion");
    let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#reset");

    addBasics.addEventListener("click", createRezept);
    addIngredients.addEventListener("click", createAnweisungen);
    addTemperature.addEventListener("click", displayTemperature);
    //addStiring.addEventListener("click", displayStir);
    sendSnape.addEventListener("click", sendPotion);
    //reset.addEventListener("click", createReset) ;  

    }

    async function sendPotion(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index2.html?" + query.toString());
        alert("Dein Zaubertrank wurde erfolgreich an Professor Snap gesendet");
    }

    function createRezept(_event: Event): void {
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#basic"); //Form Element wird benutzt, um aus ihm Informationen zu ziehen
        //console.log(_event);
        let input: HTMLInputElement = <HTMLInputElement>document.querySelector("input"); //Text 
        let textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector("textarea"); //Textarea
        let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select"); //Select
        let radio: string = form.elements["dauer"].value; //RadioButtons (HIER GEHT DAS MIT DEM QUERY.SLECTOR NICHT --> NULL)

        let display: HTMLElement = <HTMLElement>document.querySelector("#display_basic");   //Ausgabe
        display.innerHTML = ""; //leert das Array sodass sich die Ausgabe nicht wiederholt, wenn man button erneut klickt!
        display.innerHTML += "Name:" + "&nbsp" + input.value + "</br>" + "Beschreibung:" + "&nbsp" + textarea.value + "</br>" + "Wirkung:" + "&nbsp" + select.value + "</br>" + "Dauer:" + "&nbsp" + radio + "</br>";   //Ausgabe im Rezept 
       
    }

    function createAnweisungen(_event: Event): void {
    
        let formData: FormData = new FormData(document.forms[1]); //Das Form Element aus dem die Infos gezogen werden sollen (Action)
        let displayAnweisungen: HTMLElement = <HTMLElement>document.querySelector("#display_anweisungen"); //Ausgabe sowie let display oben
       
        displayAnweisungen.innerHTML = "Füge deinem Trank" + "&nbsp";
        for (let entry of formData) {
            console.log(entry);

            if (entry [0] == "Ingredients") {

                    let stepper: HTMLInputElement = <HTMLInputElement>document.getElementById(entry[1] + "_amount");
                    console.log(stepper.value);

                    displayAnweisungen.innerHTML += stepper.value + " " + entry[1] + "," + " hinzu." + "</br>";
            }
            
            }

    }

    function displayTemperature(): void {
        
        let displayAnweisungen: HTMLElement = <HTMLElement>document.querySelector("display_anweisungen");
        let temperature: boolean = false;
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("#action"));
                    
        for (let entry of formData) {
    
            switch (entry[0]) {               
                case "temperatur":
                    if (entry[1] != "") {
                            displayAnweisungen.innerHTML += "Zaubertrank " + entry[1] + "." +  "<br>";
                            temperature = true;
                    }
                    break;
                    
                case "TemperaturGrad":
                    if (entry[1] != "" && temperature) {
                        displayAnweisungen.innerHTML += "➔ Befolgen bis " + entry[1] + " °C erreicht sind." + "<br>";
                        }
                    break;
    
                    case "TemperaturDauer":
                        if (entry[1] != "0" && temperature) 
                            displayAnweisungen.innerHTML += "➔ Befolgen bis " + entry[1] + " Minute(n) vergangen sind." + "<br>";
                        break;
                    
                    case "TemperaturFarbe":
                        if (entry[1] != "keine Angabe" && temperature) 
                            displayAnweisungen.innerHTML += "➔ Befolgen bis die Trankfarbe " + entry[1] + " ist." + "<br>";
                        break;
    
                    case "TemperaturKonsistenz":
                        if (entry[1] != "keine Angabe" && temperature) 
                            displayAnweisungen.innerHTML += "➔ Befolgen bis die Konsistenz " + entry[1] + " ist." + "<br>";
                        break;
                    
                    default:
                }
            }
        displayAnweisungen.innerHTML += "<br>";

        }

    }


       
   

    //function sendPotion(_event: Event): void {
            

   // }

    
   


function convertCurrency(_total: number): string {
        let adjustedPrice: string = "";
        let knut: string;
        let sickel: string;
        let galleonen: string;
        let remainder: number;

        galleonen = (Math.floor(_total / 493)).toString();
        remainder = _total % 493;
        sickel = (Math.floor(remainder / 29)).toString();
        remainder = remainder % 29;
        knut = remainder.toString();

        if (galleonen != "0") {
            adjustedPrice = galleonen + " Galleonen, " + sickel + " Sickel und " + knut + " Knut";
        }

        else if (sickel != "0") {
            adjustedPrice = sickel + " Sickel und " + knut + " Knut";
        }

        else {
            adjustedPrice = knut + " Knut";
        }

        return adjustedPrice;
    }

       

        
        
    

        

        //function handleChange(_event: Event): void {   
            //console.log(_event);
    
    
            //let formData: FormData = new FormData(document.forms[0]);
            //for (let entry of formData) {
                //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
                //let price: number = Number(item.getAttribute("price"));
    
                //if (entry [0] == "Rezept")
                    //rezept.innerHTML += entry [1];
               // else 
                    //rezept.innerHTML += item.name;
    
                //rezept.innerHTML += item.name + "  GAL " + price + "</br>";
            }
        }
    
    





        
