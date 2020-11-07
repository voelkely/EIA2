namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        generateContent(data);   
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
            display.innerHTML += input + "</br>" + textarea + "</br>" + select + "</br>"+ radio + "</br>";   //Ausgabe im Rezept   
        }



        //addIngredients.addEventListener("click", add_ingredients);

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
    
    





        
