namespace Plotty {
    /**
     * Address LEDs linearly row first
     */
    //% blockId=Plot LED
    //% block="plot at $index"
    //% index.min=0 index.max=24
    export function plotAt(index: number): void {
        index |= 0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x, y)
    }
    /**
     * Turn on LEDs
     */
    //% blockID=All LED's
    //% block="Turn on an LED $index"
    //% index.min=0 index.max=24
    export function TurnOnAnLED(index: number): void {
    index |= 0
    const y =Math.floor(index / 5);
    const x = Math.floor(index % 5);
    led.plot(x,y)
    }
}
