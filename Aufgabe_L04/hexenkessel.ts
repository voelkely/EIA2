namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        //generateContent(data);   
        //form.addEventListener("change", createPotion);
        //let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("slider"); //??

        function createRezept(_event: Event): void {
            let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#basic"); //Form Element wird benutzt, um aus ihm Informationen zu ziehen
            console.log(_event);
            let input: string = form.elements["name"].value;  //Text 
            console.log(input);
            let textarea: string = form.elements["beschreibung"].value; //Textarea
            let select: string = form.elements["wirkung"].value; //Select
            let radio: string = form.elements["dauer"].value; //RadioButtons   
            let display: HTMLElement = <HTMLElement>document.querySelector("#display_basic");   //Button hinzugefügt
            display.innerHTML += "Name:" + "&nbsp" + input + "</br>" + "Beschreibung:" + "&nbsp" + textarea + "</br>" + "Wirkung:" + "&nbsp" + select + "</br>" + "Dauer:" + "&nbsp" + radio + "</br>";   //Ausgabe im Rezept   
        }

        let addBasics: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_basics");
        addBasics.addEventListener("click", createRezept);

        function createAnweisungen(_event: Event): void {
            let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#action");
            console.log(_event);
            let spider: string = form.elements["spinnenbeine"].value;
            let spiderValue: number =  form.elements["legs_value"].value;
            let mint: string = form.elements["pfefferminz"].value;
            let mintValue: number =  form.elements["mints_value"].value;
            let nail: string = form.elements["zehennägel"].value;
            let nailValue: number =  form.elements["nails_value"].value;
            let egg: string = form.elements["ashwinder_eier"].value;
            let eggValue: number =  form.elements["eggs_value"].value;
            let wing: string = form.elements["fledermausflügel"].value;
            let wingValue: number =  form.elements["wings_value"].value;
            let eye: string = form.elements["beetle_augen"].value;
            let eyeValue: number =  form.elements["eyes_value"].value;
            let fairy: string = form.elements["feenflügel"].value;
            let fairyValue: number =  form.elements["fairy_value"].value;
            let feather: string = form.elements["jobberknoll_federn"].value;
            let featherValue: number =  form.elements["feather_value"].value;
            let stone: string = form.elements["mondstein"].value;
            let stoneValue: number =  form.elements["stone_value"].value;

            let tempRange: number = form.elements["heat"].value;
            let tempText: string = form.elements["heat_input"].value;
            let heatConsistency: string = form.elements["heating"].value;


            let anweisungen: HTMLElement = <HTMLElement>document.querySelector("#anweisungen");
            anweisungen.innerHTML += "Packe" + "&nbsp" + spiderValue + "&nbsp" + spider + "," +  mintValue + "&nbsp" + mint + "," + nailValue + "&nbsp" + nail + 
            "</br>" + eggValue + "&nbsp" + egg + "," + wingValue + "&nbsp" + wing + "," + eyeValue + "&nbsp" + eye + "," + fairyValue + "&nbsp" + fairy + 
            "</br>" + featherValue + "&nbsp" + feather + "," + stoneValue + "&nbsp" + stone + "," + "zusammen in einen Zaubertopf." + 
            "Bringe deinen Trank auf eine Temperatur von" + tempRange + tempText + heatConsistency;
        }

        let addIngredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_ingredients"); 
        addIngredients.addEventListener("click", createAnweisungen);

        let addTemperature: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_temperature");
        addTemperature.addEventListener("click", createAnweisungen);

        //let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#action");

        

        //function handleChange(_event: Event): void {   
            //console.log(_event);
    
            //let effect: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
            //effect.innerHTML += effect.value;    
    
            //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
            //console.log(inputs);
    
            //let rezept: HTMLDivElement = <HTMLDivElement>document.querySelector("div#ausgabe");
            //rezept.innerHTML = "";
    
    
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
    
    





        
