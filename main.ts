input.onButtonPressed(Button.A, function () {
    vert()
    basic.pause(2000)
    orange()
    basic.pause(2000)
    rouge()
    basic.pause(2000)
    lumiere_rouge = 2
})
function orange () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
let lumiere_rouge = 0
vert()
basic.forever(function () {
    if (lumiere_rouge < 1) {
        vert()
    }
})
