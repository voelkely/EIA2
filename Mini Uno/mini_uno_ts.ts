var i: string = prompt("Wie viele Karten sollen ausgeteilt werden?");
    var counter: number = Number(i);
    // GENERELLE FOR SCHLEIFE DIE u-mal DURCHLAEUFT
    for (var u: number = 0; u < counter; u++) {
        var card: string = "";
        var r_color: number = randomBetween(1, 1000);
        console.log(r_color);