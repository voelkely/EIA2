function handleButton(_event: Event): void {
    let clickedButton: HTMLElement = <HTMLElement>_event.target;
    let formData: FormData = new FormData(document.forms[1]);
    let anweisungen: HTMLDivElement = <HTMLDivElement>document.querySelector("div#anweisungen");
    let p: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
    if (clickedButton.id =="ingredients") {
        let menge: number = parseInt((<HTMLInputElement>document.querySelector("[name= 'Menge']")).value);
        let price: number = menge * parseInt(select.selectedOptions[0].getAttribute("price")!);
        p.innerHTML ="Füge" + (<HTMLInputElement>document.querySelector("[name = 'Menge']")).value + "Stück/ml" + Selection.value + "hinzu. (" + price)
        p.setAttribute("preis", price.toFixed(0));
        action.appendChild(p); //HÄÄÄ
    }

}

    

    function displayAmount(_event: Event): void {
    let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
    let amount: string = (<HTMLInputElement>_event.target).value;
    progress.value = parseFloat(amount);
}
}