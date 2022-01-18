input.onButtonPressed(Button.A, function () {
    PixelArray.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    PixelArray.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    PixelArray.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    PixelArray.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    PixelArray.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    PixelArray.show()
})
input.onButtonPressed(Button.B, function () {
    PixelArray.clear()
    PixelArray.show()
})
let PixelArray: neopixel.Strip = null
PixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.lightLevel() > 80) {
        PixelArray.setBrightness(255)
    } else {
        PixelArray.setBrightness(128)
    }
})
basic.forever(function () {
    basic.pause(100)
    PixelArray.rotate(1)
    PixelArray.show()
})
