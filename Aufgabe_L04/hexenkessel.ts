namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);

    let ausgabe: string [];
    let formData: string [];

    function handleLoad(_event: Event): void {

        generateContent(data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", createPotion);
    }

    function createPotion(_event: Event): void {
        let spider: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#spiderlegs")
        );
        let mints: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#peppermints")
        );
        let nails: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#toenails")
        );
        let egg: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#ashwinder egg")
        );
        let bat: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#bat wing")
        );
        let eye: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#beetle eye")
        );
        let fairy: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#fairy wing)
        );
        let feather: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#jobberknoll feather")
        );
        let moonstone: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#moonstone")
        );
        let temperature: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#celsius")
        );
        let stir: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#stir")
        );
        let slow: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#slow")
        );
        let fast: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#fast")
        );
        let thick: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#thick")
        );
        let slimy: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#slimy")
        );
        let aqueous: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#aqueous")
        );
        let gaseous: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#gaseous")
        );
        let steamy: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#steamy")
        );
        let color: HTMLFormElement = <HTMLFormElement>(
            document.querySelector("#color")
        );
        let intensity: boolean = false;
       
        let ausgabe: HTMLDivElement = <HTMLDivElement>(
            document.querySelector("#ausgabe")
          );
        ausgabe.innerHTML = "";
        let formData: FormData = new FormData(document.forms[0]);
    }

    //function handleChange(_event: Event): void {
        //console.log(_event);

        //let effect: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
        //effect.innerHTML += effect.value;    

        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);

        //let ausgabe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#ausgabe");
        //ausgabe.innerHTML = "";


        //let formData: FormData = new FormData(document.forms[0]);
        //for (let entry of formData) {
            //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            //let price: number = Number(item.getAttribute("price"));

            //if (entry [0] == "Your Potion")
                //ausgabe.innerHTML += entry [1];
            //else 
               // ausgabe.innerHTML += item.name;

            //ausgabe.innerHTML += item.name + "  GAL " + price + "</br>";
        }
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}