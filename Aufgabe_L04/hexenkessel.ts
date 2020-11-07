namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        //generateContent(data);

        

        //form.addEventListener("change", createPotion);
        //let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("slider"); //??

        function createRezept(_event: Event): void {
            let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#basic");
            console.log(_event);
            let input: string = form.elements["name"].value; 
            console.log(input);
            let textarea: string = form.elements["beschreibung"].value;
            let select: string = form.elements["wirkung"].value;
            let radio: string = form.elements["dauer"].value;
            let display: HTMLElement = <HTMLElement>document.querySelector("#display_basic");
            display.innerHTML += input + "</br>" + textarea + select + radio + "</br>";

        }

        let addBasics: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_basics");
        addBasics.addEventListener("click", createRezept);

        //let addIngredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_ingredients");  //?? WHY RED?
        //addIngredients.addEventListener("click", add_ingredients);

        

        

        //function handleChange(_event: Event): void {   //WHAT IS THIS??
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
    
    





        
