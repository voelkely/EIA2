namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
    }

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

    function displayIngredients(): void {
        
        let anweisungen: HTMLDivElement = <HTMLDivElement>document.querySelector("form#anweisungen");
        let totalPrice: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#total");
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form#action"));

        // totalSpan.innerHTML = "";

        for (let entry of formData) {

            if (entry[0] == "ingredients") {
                    let selector: string = "[value='" + entry[1] + "']";
                    let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
                    
                    let associatedAmount: string = entry[1] + "Menge";
                    let amount: number = Number(formData.get(associatedAmount));

                    let itemprice: number = Number(item.getAttribute("price"));
                    total += amount * itemprice;

                    anweisungen.innerHTML += amount + " " + entry[1] + " hinzugeben." + "<br>";
            }
        }
        anweisungen.innerHTML += "<br>";
        let adjustedPrice: string = convertCurrency(total);
        totalPrice.innerHTML = "<p><strong>Preis: " + adjustedPrice;
}

    let addIngredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#add_ingredients");
    addIngredients.addEventListener("click", displayIngredients);