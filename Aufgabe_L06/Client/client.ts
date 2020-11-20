namespace L06_Hexenkessel {

    export async function sendPotion(): Promise<void> {
        let form = new FormData(document.forms[0]);
        let url: string = "http://localhost5001";
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");   // sortiert das Select Element aus dem HTML // bei Text area if schleife weil da auch nichts drin  steht
        url = url + "?" + query.toString() + "&wirkung=" + select.value;

        let response: Response = await fetch(url);
        console.log(response);

        let reply: string = await response.text();  // antwort vom text?
        console.log(reply);
        alert("Potion sent");
    }
}