def on_button_pressed_a():
    PixelArray.set_pixel_color(0, neopixel.colors(NeoPixelColors.BLUE))
    PixelArray.set_pixel_color(1, neopixel.colors(NeoPixelColors.YELLOW))
    PixelArray.set_pixel_color(2, neopixel.colors(NeoPixelColors.ORANGE))
    PixelArray.set_pixel_color(3, neopixel.colors(NeoPixelColors.VIOLET))
    PixelArray.set_pixel_color(4, neopixel.colors(NeoPixelColors.WHITE))
    PixelArray.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    PixelArray.clear()
    PixelArray.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

PixelArray: neopixel.Strip = None
PixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

def on_forever():
    basic.pause(100)
    PixelArray.rotate(1)
    PixelArray.show()
basic.forever(on_forever)
