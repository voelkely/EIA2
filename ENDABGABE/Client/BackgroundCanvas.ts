namespace Firework {

    export function drawCanvas(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0 , crc2.canvas.width, crc2.canvas.height);
    }


}
