namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);

    let ausgabe: string [];
    let formData: string [];

    function handleLoad(_event: Event): void {

        generateContent(data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }

    function createPotion(_event: MouseEvent): void {
        let potion: HTMLDivElement = <HTMLDivElement>document.querySelector("div")
    }

    function handleChange(_event: Event): void {
        console.log(_event);

        let effect: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
        effect.innerHTML += effect.value;    

        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        let ausgabe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#ausgabe");
        ausgabe.innerHTML = "";


        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            if (entry [0] == "Your Potion")
                ausgabe.innerHTML += entry [1];
            else 
                ausgabe.innerHTML += item.name;

            ausgabe.innerHTML += item.name + "  GAL " + price + "</br>";
        }
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}