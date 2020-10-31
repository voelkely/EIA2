namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
       
        form.addEventListener("change", handleChange);

    }

    function handleChange(_event: Event): void {
        console.log(_event);
        let effect: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
        console.log(effect.value);

        let Description: HTMLInputElement = [HTMLInputElement] document.querySelector("textarea");
        potion.innerHTML += Description.value;

        let Name: HTMLInputElement = [HTMLInputElement] document.querySelector("text");
        form.innerHTML += Name.value;
        

        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        let potion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#potion");
        potion.innerHTML = "";


        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            if (entry [0] == "Effect")
                potion.innerHTML += entry [1];
            else 
                potion.innerHTML += item.name;

            potion.innerHTML += item.name + "  € " + price + "</br>";
        }
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}