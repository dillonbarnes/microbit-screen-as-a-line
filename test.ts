//for(let i = 0; i < 25; ++i) {
//    Plotty.TurnOnAnLED(i)
//    basic.pause(100)
//}
//basic.clearScreen()
basic.forever(function () {
    basic.pause(200)
    led.plotBarGraph(randint(0,4), randint(0,4))
    led.toggle(randint(0,4), randint(0,4))
    basic.pause(200)
    led.toggle(randint(0,4), randint(0,4))
    basic.pause(200)
    Plotty.plotAt(randint(0,24))
    
//})
basic.forever(function () {
    Plotty.plotAt(randint(0,24))
})
Plotty.plotAt(randint(4,8))
})